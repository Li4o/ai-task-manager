import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👇 ここから追加
  server: {
    watch: {
      ignored: ["**/src-tauri/**"], // Rustのビルドファイルを監視対象から外す
    },
  },
  // 👆 ここまで追加
});