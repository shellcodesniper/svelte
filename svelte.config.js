import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-cloudflare';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
  preprocess: preprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
