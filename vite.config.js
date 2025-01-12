import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/',
	resolve: {
		alias: {
			assets: resolve(__dirname, 'src/assets'),
			pages: resolve(__dirname, 'src/pages/pages'),
			router: resolve(__dirname, 'src/router'),
			hooks: resolve(__dirname, 'src/pages/hooks'),
			store: resolve(__dirname, 'src/store'),
			componentsUI: resolve(__dirname, 'src/ui/components'),
			env: resolve(__dirname, 'src/Env'),
		},
	},
});
