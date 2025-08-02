import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
//  server: {
//     proxy: {
//      '/macros': { // Si tu URL de Apps Script comienza con /macros
//        target: 'https://script.google.com',
//        changeOrigin: true,
//        secure: false, // Puedes necesitar esto para evitar problemas con HTTPS
//      },
//    },
//  },
  define:{
    'import.meta.env': JSON.stringify(process.env),
  }
})
