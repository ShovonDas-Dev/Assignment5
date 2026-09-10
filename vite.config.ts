import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  publicDir: 'Public',
  plugins: [
    react(),
     tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
