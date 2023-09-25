import { PluginOption } from "vite";

// For React Support
import react from "@vitejs/plugin-react";

const plugins = (mode: string): PluginOption[] => {
  return [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })];
};

export default plugins;
