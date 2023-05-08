import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	build: {
		assetsDir: './static',
		emptyOutDir: true,
	},

	/* Absolute Paths */
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@config': path.resolve(__dirname, './src/config'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@providers': path.resolve(__dirname, './src/providers'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@mocks': path.resolve(__dirname, './src/mocks'),
			'@fonts': path.resolve(__dirname, './src/assets/fonts'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@scss': path.resolve(__dirname, './src/assets/scss'),
		},
	},
	plugins: [react()],
});
