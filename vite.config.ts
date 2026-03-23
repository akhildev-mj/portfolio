import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		target: 'esnext',
		sourcemap: false,
		cssCodeSplit: true,
		modulePreload: {
			polyfill: false,
		},
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('lucide-react')) return 'vendor-icons';
						if (
							id.includes('react') ||
							id.includes('react-dom') ||
							id.includes('scheduler')
						) {
							return 'vendor-react';
						}
						return 'vendor-core';
					}
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		host: true,
		port: 3000,
	},
});
