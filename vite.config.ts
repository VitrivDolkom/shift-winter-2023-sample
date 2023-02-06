import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@redux': path.resolve(__dirname, './src/redux'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages')
        }
    },
    plugins: [react()]
})
