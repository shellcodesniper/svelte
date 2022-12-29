<script lang="ts">
  import '$css/layout.css?inline';
  import NavBar from '$components/navbar/Navbar.svelte';
</script>

<style>
  .css-main-flex-box {
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin-left: 10vw;
    min-height: 100vh;
    background-color: var(--first-level-background-color);
  }
</style>

<NavBar />
<!-- NAVBAR -->
<div class="css-main-container">
  <!-- MAIN CONTAINER -->
  <div id="flex-box" class="css-main-flex-box">
    <slot />
  </div>
  <!-- MAIN CONTENT -->
</div>
