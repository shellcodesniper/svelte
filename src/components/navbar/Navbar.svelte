<style>
  .inline-navbar-container {

  }
</style>

<script lang="ts">
  import LogoNavBar from '$components/logo/logo_navbar.svelte';
</script>

<div class="inline-navbar">
  <div class="inline-navbar-container">
    <div class="inline-navbar-logo">
      <a href="/">
        <LogoNavBar />
      </a>
    </div>
    <div class="inline-navbar-links">
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</div>

