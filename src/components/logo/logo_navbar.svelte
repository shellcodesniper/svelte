<script type="ts">
  import LogoSvg from './logo_svg.svelte?component';
  function redirect_to_bdevio(): void {
    window.location.href = '/';
  }
</script>

<style>
  .inline-navbar-logo-wrapper {
    display: inline-block;
    width: 100%;
    height: 2rem;
    fill: var(--primary-text);
  }
</style>

<div on:click={redirect_to_bdevio} aria-hidden = "true" class="inline-navbar-logo-wrapper">
  <LogoSvg/>
</div>

