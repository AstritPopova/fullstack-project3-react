import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Vite config for a simple React project
export default defineConfig({
  plugins: [react()],
});
