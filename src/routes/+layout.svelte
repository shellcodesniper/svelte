<script lang="ts">
  import '$css/layout.css?inline';
  import NavBar from '$components/navbar/Navbar.svelte';
</script>

<style>
  .inline-main-flex-box {
    display: flex;
    flex-direction: column;
    width: 80vw;
    /* min-height: 100vh; */
    margin: 1rem 10vw 0.38rem 10vw;
    background-color: var(--second-bg);
  }

  .inline-main-inner-flex-box {
    display: inline-block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .spacer {
    background-color: red;
    height: 2rem;
  }

</style>

<NavBar />
<div class="spacer"></div>
<div class="inline-main-flex-box">
  <!-- NAVBAR -->

  <div id="flex-box" class="inline-main-inner-flex-box">
    <slot />
  </div>
  <!-- MAIN CONTENT -->
</div>
<!-- MAIN CONTAINER -->
