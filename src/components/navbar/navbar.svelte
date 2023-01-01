<style>
  @media all and (max-width: 800px) {
    header {
      margin-bottom: 2rem;
    }
    header > .inline-logo, header > .inline-navbar {
      display: none;
    }
  }
  header {
    padding: 1rem;
    margin: 0 auto;
  }
  header:after, header:before {
    content: " ";
    display: table
  }
  header:after {
      clear:both
  }
  .inline-logo {
    float: left;
    display: block;
  }
  .inline-navbar {
    float: right;
    display: block;
  }

  header a {
    color: var(--nav-link-text);
  }

  header .inline-navbar {
    float:right
  }

  header .inline-navbar .inline-menu {
    display: inline-block;
    position: relative;
    padding-left: 0;
    padding-right:0
  }

  header .inline-navbar .inline-menu .inline-menu-item {
    padding: 0 4px;
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    backface-visibility: hidden;
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow:hidden
  }

  header .inline-navbar .inline-menu .inline-menu-item + .inline-menu-item {
    margin-left:10px
  }

  header .inline-navbar .inline-menu .inline-menu-item:before {
    content: "";
    position: absolute;
    z-index: -1;
    height: 2px;
    bottom: 0;
    left: 51%;
    right: 51%;
    transition-duration: .2s;
    transition-property: right, left;
    transition-timing-function:ease-out
  }

  header .inline-navbar .inline-menu .inline-menu-item:before {
    background:#eee7e7
  }

  header .inline-navbar .inline-menu .inline-menu-item.active:before, header .inline-navbar .inline-menu .inline-menu-item:active:before, header .inline-navbar .inline-menu .inline-menu-item:focus:before, header .inline-navbar .inline-menu .inline-menu-item:hover:before {
    right: 0;
    left:0
  }

  header .inline-navbar li.inline-bdevio:before {
    background-color: var(--bdev-io-text) !important;
  }
  header .inline-navbar li.inline-bdevio a {
    color: var(--bdev-io-text) !important;
  }


</style>

<script lang="ts">
  import Logo from '$component/logo.svelte';
</script>

<header class="">
  <div class="inline-logo">
    <Logo />
  </div>
  <nav class="inline-navbar">
    <ul class="inline-menu">
      <li class="inline-menu-item menu-type-about">
        <a href="/about">About</a>
      </li>
      <li class="inline-menu-item menu-type-projects">
        <a href="/projects">Projects</a>
      </li>
      <li class="inline-menu-item menu-type-bdevio inline-bdevio">
        <a href="https://github.com/bdev-io">BDEV-IO</a>
      </li>
    </ul>
  </nav>
</header>


