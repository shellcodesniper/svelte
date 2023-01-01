<script lang="ts">
	// Loading first polyfills that are shared between for legacy&modern browsers.
	import 'abortcontroller-polyfill';
  import NavBar from '$component/navbar/navbar.svelte';
	import '$lib/css/styles.css';
</script>

<!-- Having the main container be flex causes issues on IE11 -->

<!-- Maybe Mobile Navbar -->
<div class="css-container">
  <NavBar />
  <!-- <header>NAVBAR</header> -->

  <main class="inline-main" style={import.meta.env.LEGACY ? "display: block" : undefined}>
    <slot />
  </main>
  <footer><span>장부가 세상에 태어나 큰 뜻을 품었으니,<div class="inline-jumper"></div>죽어도 그 뜻 잊지 말자 하늘에 대고 맹세 해본다.</span></footer>
  <!-- MAIN CONTENT -->
</div>
<!-- MAIN CONTAINER -->

<style>
  .inline-main {
    display: block;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 800px) {
    .inline-jumper {
      display: block;
      text-align: center;
    }
  }

  @media (min-width: 800px) {
    .inline-jumper {
      width: 0.5rem;
      display: inline-block;
    }
  }
</style>
