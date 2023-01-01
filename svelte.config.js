import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
    alias: {
      $component: './src/components',
      $css: './src/lib/css',
    }
	},
  prerender: {
    crawl: false,
    entries: ['about'],
  },
};

export default config;
