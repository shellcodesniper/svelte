import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
  preprocess: preprocess(),
	kit: {
		adapter: adapter({
      fallback: 'kuuwange.html',
    }),
    prerender: { entries: [] },
    alias: {
      $components: './src/components',
      $css: './src/css',
    }
	}
};

export default config;
