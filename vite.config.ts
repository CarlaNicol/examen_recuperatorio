import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react-swc";
import { ghPagesPlugin } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin(), ghPagesPlugin()],
  base: "/examen_recuperatorio",
});
