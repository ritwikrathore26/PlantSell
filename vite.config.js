import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/PlantSell/', // 👈 EXACT repo name (case-sensitive!)
  plugins: [react()],
});
