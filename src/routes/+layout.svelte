<script lang="ts">
  import '$css/layout.css?inline';
  import NavBar from '$components/navbar/Navbar.svelte';
</script>

<NavBar />
<!-- NAVBAR -->
<div class="css-main-container">
  <!-- MAIN CONTAINER -->
  <slot />
  <!-- MAIN CONTENT -->
</div>
