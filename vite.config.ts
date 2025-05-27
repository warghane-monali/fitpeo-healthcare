import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

//@ts-ignore
import path, { resolve } from "path";

//@ts-ignore
const root = resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{
    port:3010
  },
  resolve: {
    alias: {
      "@" : path.resolve(root, 'src'),
      '@app': path.resolve(root, 'app'),
      '@assets': path.resolve(root, 'assets'),
      '@components': path.resolve(root, 'components'),
      '@features': path.resolve(root, 'features'),
      '@student': path.resolve(root, 'features/student'),
      '@utils': path.resolve(root, 'utils'),
      '@types' : path.resolve(root, 'src/types'),
      '@hooks' : path.resolve(root, 'hooks'),
      '@data' : path.resolve(root, 'data'),
    }
    }
})
