import resolveConfig from "tailwindcss/resolveConfig";
import { useMemo } from "react";
const tailwindConfig = require("tailwind.config");

const useTailwind = () => {
  const tailwind = useMemo(() => resolveConfig(tailwindConfig), []);
  return tailwind;
};

export default useTailwind;
