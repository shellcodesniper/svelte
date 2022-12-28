import { imagetools } from 'vite-imagetools';
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const supportedExtensions = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'];

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
    imagetools({
			defaultDirectives: (url) => {
				const extension = path.extname(url.pathname);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: `webp;avif;${extension}`,
						picture: true
					});
				}
				return new URLSearchParams();
			}
		}),
    sveltekit(),
  ],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
