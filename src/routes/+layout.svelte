<script lang="ts">
  import '$css/layout.css?inline';
  import NavBar from '$components/navbar/Navbar.svelte';
</script>

<NavBar />
<div class="container">
  <slot />
</div>
