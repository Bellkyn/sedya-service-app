import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/sedya-service-app/',
	plugins: [react()],
	css: {
		modules: {
			generateScopedName: '[name]__[local]__[hash:8]'
		}
	},
	resolve: {
		alias: {
			app: '/src/app',
			pages: '/src/pages',
			shared: '/src/shared',
			widgets: '/src/widgets'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	}
});
