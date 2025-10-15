import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  Linking,
  Dimensions,
  Button,
  Text,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import * as FileSystem from "expo-file-system";
import { WebView } from "react-native-webview";
import { Asset } from "expo-asset";
import * as Sharing from "expo-sharing";
// import Pdf from "react-native-pdf";
import Voice from "@react-native-voice/voice";

interface Props {}
const Index: React.FC<Props> = () => {
  const [uri, setUri] = React.useState("");
  const [result, setResult] = React.useState("");

  const [fileUri, setFileUri] = React.useState("");
  const router = useRouter();
  const [PdfComponent, setPdfComponent] = React.useState<any>(null);

  useEffect(() => {
    Voice.onSpeechResults = e => setResult(e.value?.[0] || "");
    return () => {
      Voice.destroy();
      Voice.removeAllListeners();
    };
  }, []);

  /**
   * 下载文件
   * @param uri 网络资源
   * @param filename 文件名
   * @param filepath 文件目录
   */
  const downloadAsync = async (
    uri: string,
    filename: string,
    filepath: string
  ) => {
    try {
      const dir = FileSystem.cacheDirectory + filepath + "/";
      // ensure directory exists
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true }).catch(
        () => {}
      );

      const destPath = dir + filename;
      const result = await FileSystem.downloadAsync(uri, destPath);
      console.log("download result:", result, destPath);
      // result.uri is the local file path
    } catch (error) {
      console.error(error);
    }
  };

  const handlePdfLib = async () => {
    try {
      const dir = FileSystem.cacheDirectory + "pdfs";
      const files = await FileSystem.readDirectoryAsync(dir);
      if (!files || files.length === 0) {
        console.warn("目录为空：", dir);
        return;
      }

      const filename = files[0];
      const fullPath = `${dir}/${filename}`; // 例如 /data/user/0/.../cache/pdfs/sample.pdf
      setFileUri(fullPath);
    } catch (err) {
      console.error(err);
    }
  };

  const sharePdf = async () => {
    try {
      await downloadAsync(url, "sample.docx", "words");
      const dir = FileSystem.cacheDirectory + "words";
      const files = await FileSystem.readDirectoryAsync(dir);
      if (!files || files.length === 0) {
        console.warn("目录为空：", dir);
        return;
      }

      const filename = files[0];
      const fullPath = `${dir}/${filename}`; // 例如 /data/user/0/.../cache/pdfs/sample.pdf
      if (fullPath) {
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(fullPath);
        } else {
          // 作为后备，尝试用 Linking 打开（有时会被阻止）
          Linking.openURL(fullPath);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const readDir = async (subdir: string) => {
    const dir = FileSystem.cacheDirectory + subdir;
    const files = await FileSystem.readDirectoryAsync(dir);
    if (!files || files.length === 0) {
      console.warn("目录为空：", dir);
      return;
    }
    console.log("files:", files);
    return files;
  };

  const readFileBase64 = async (subdir: string) => {
    try {
      const dir = FileSystem.cacheDirectory + subdir;
      const files = await FileSystem.readDirectoryAsync(dir);
      if (!files || files.length === 0) {
        console.warn("目录为空：", dir);
        return;
      }

      const filename = files[0];
      const fullPath = `${dir}/${filename}`; // 例如 /data/user/0/.../cache/pdfs/sample.pdf

      // 以 base64 读取
      const base64 = await FileSystem.readAsStringAsync(fullPath, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const dataUri = `data:application/pdf;base64,${base64}`;
      // 用一个简单 HTML embed/iframe 包裹（注意转义问题）
      const html = `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>html,body{height:100%;margin:0}</style>
  </head>
  <body>
    <embed src="${dataUri}" type="application/pdf" width="100%" height="100%"/>
    <!-- 如果 embed 无效，下面 iframe 可尝试替换 -->
    <!-- <iframe src="${dataUri}" style="border:0; width:100%; height:100%"></iframe> -->
  </body>
</html>
`;
      console.log("base64:" + dataUri);
      setUri(html);
    } catch (err) {
      console.error(err);
    }
  };

  const previewLocalFile = async (subdir: string) => {
    try {
      const tempDir = FileSystem.cacheDirectory + subdir;
      const files = await FileSystem.readDirectoryAsync(tempDir);
      if (!files || files.length === 0) {
        console.warn("目录为空：", tempDir);
        return;
      }

      const filename = files[0];
      const fullPath = `${tempDir}/${filename}`;
      const info = await FileSystem.getInfoAsync(fullPath);
      console.log("preview file info:", info);
      if (info.exists) {
        // Prefer info.uri if available, otherwise construct file:// URI
        const fileUriLocal = info.uri ?? `file://${fullPath}`;
        // If it's a pdf, directly set uri to file path so WebView or platform viewer can open
        setUri(fileUriLocal);
      } else {
        console.warn("文件不存在：", fullPath);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ThemedView style={styles.container}>
      {/* hidden stack so expo-router has header config if needed */}
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ThemedText type="defaultSemiBold">‹</ThemedText>
        </Pressable>
        <ThemedText type="title">挤压伤</ThemedText>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText style={styles.breadcrumb}>
          特殊类型伤 / 挤压伤 / 救治方案
        </ThemedText>

        <View style={styles.tabRow}>
          <Pressable style={[styles.tab, styles.tabActive]}>
            <ThemedText type="defaultSemiBold">救治原则</ThemedText>
          </Pressable>
          <Pressable style={styles.tab}>
            <ThemedText>现场急救</ThemedText>
          </Pressable>
          <Pressable style={styles.tab}>
            <ThemedText>早期救治</ThemedText>
          </Pressable>
          <Pressable style={styles.tab}>
            <ThemedText>专科救治</ThemedText>
          </Pressable>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressTrack} />
          <View style={[styles.progressBar, { width: "40%" }]} />
          <Pressable style={styles.playButton}>
            <ThemedText>▶</ThemedText>
          </Pressable>
        </View>

        <ThemedText style={styles.paragraph}>
          专科救治是医疗体系中的核心环节，需结合多学科协作与精准诊疗技术，以下为关键要点:风险34。
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>
          一、专科救治体系构建
        </ThemedText>
        <ThemedText style={styles.paragraph}>
          1.
          多学科协作模式：整合心内科、外科、重症医学科等资源，形成“小急诊大平台”的协作机制，例如胸痛中心实现心肌梗死患者直接转诊介入手术室。
        </ThemedText>

        <ThemedText style={styles.sectionTitle}>二、核心技术应用</ThemedText>
        <ThemedText style={styles.paragraph}>
          急危重症处理：创伤救治：黄金1小时内完成评估与手术，危重创伤存活率可提升80%。
        </ThemedText>

        <View>
          <Pressable
            style={styles.tab}
            onPress={() => {
              sharePdf();
            }}>
            <ThemedText>系统工具打开</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => {
              handlePdfLib();
            }}>
            <ThemedText>react-native-pdf</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={async () => {
              await downloadAsync(
                "https://pdfobject.com/pdf/sample.pdf",
                "sample.pdf",
                "pdfs"
              );
            }}>
            <ThemedText>下载PDF</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={async () => {
              await downloadAsync(
                "http://localhost:3000/test.docx",
                "sample.docx",
                "words"
              );
            }}>
            <ThemedText>下载Word</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => {
              readDir("pdfs");
            }}>
            <ThemedText>文件目录</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => {
              readFileBase64("pdfs");
            }}>
            <ThemedText>读取PDF Base64</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => {
              previewLocalFile("pdfs");
            }}>
            <ThemedText>本地预览PDF</ThemedText>
          </Pressable>
          <Pressable
            style={styles.tab}
            onPress={() => {
              previewLocalFile("words");
            }}>
            <ThemedText>本地预览Word</ThemedText>
          </Pressable>
        </View>

        <View>
          <Button title="开始识别" onPress={() => Voice.start("zh-CN")} />
          <Button title="停止识别" onPress={() => Voice.stop()} />
          <Text>识别结果: {result}</Text>
        </View>

        {uri && (
          <WebView
            style={styles.webview}
            originWhitelist={["*"]}
            source={
              uri?.trim().startsWith("<!doctype") ? { html: uri } : { uri }
            }
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        )}

        <View>
          <ThemedText style={styles.sectionTitle}>文件地址</ThemedText>
          <ThemedText style={styles.sectionTitle}>{uri}</ThemedText>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <Pressable style={styles.footerButton} onPress={() => router.push("/")}>
        <ThemedText type="defaultSemiBold" style={{ color: "#fff" }}>
          返回
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 88,
    paddingTop: 42,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6eef0",
    backgroundColor: "#f8fbfb",
  },
  backButton: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { padding: 16, paddingBottom: 24 },
  breadcrumb: { color: "#6b7280", marginBottom: 12 },
  tabRow: { flexDirection: "row", gap: 8, marginBottom: 16 },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "#f1f5f9",
  },
  tabActive: { backgroundColor: "#dff3e6" },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  progressTrack: {
    position: "absolute",
    left: 16,
    right: 56,
    height: 8,
    backgroundColor: "#eef2f2",
    borderRadius: 8,
  },
  progressBar: {
    position: "absolute",
    left: 16,
    height: 8,
    backgroundColor: "#2f9d58",
    borderRadius: 8,
  },
  playButton: {
    marginLeft: "auto",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#e6eef0",
  },
  paragraph: { marginBottom: 12, color: "#374151" },
  sectionTitle: { fontWeight: "700", marginTop: 8, marginBottom: 6 },
  footerButton: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    height: 48,
    backgroundColor: "#1f7a3a",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    height: 400,
  },
});
