import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        tours: './src/pages/tours.html',
        form:'./src/pages/form.html'
        // Agrega más páginas según sea necesario
      },
    },
  },
});
