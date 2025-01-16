import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows the server to be accessible from the network
    open: true, // Automatically opens the app in the default browser
  },
})
