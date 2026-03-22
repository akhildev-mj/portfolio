import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		target: 'esnext',
		minify: 'terser',
		terserOptions: {
			ecma: 5,
			compress: {
				drop_console: true,
				drop_debugger: true,
				passes: 2,
				pure_funcs: ['console.info', 'console.debug'],
				unsafe: true,
				unsafe_arrows: true,
			},
			mangle: { toplevel: true },
			format: { comments: false },
			safari10: true,
		},
		sourcemap: false,
		cssCodeSplit: true,
		cssMinify: 'lightningcss',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('framer-motion')) return 'vendor-framer';
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
