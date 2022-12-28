// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

/// <refrence types="@sveltejs/kit" />
declare namespace App {
	interface Error {}

	interface Locals {}

  interface Platform {
    env: {
      COUNTER: DurableObjectNamespace;
    };
    context: {
      waitUntil(promise: Promise<any>): void;
    };
    caches: CacheStorage & { default: Cache }
  }
	interface PageData {
    props: {

    },
    locals: {
    },
    session: {
    },
  }
  // NOTE :
  // Defines the common shape of the $page.data store - that is, the data that is shared between all pages. The 
  // Load
  // and 
  // ServerLoad
  //  functions in ./$types will be narrowed accordingly.
  // Use optional properties for data that is only present on specific pages. Do not add an index signature ([key: string]: any).

}
