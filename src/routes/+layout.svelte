<style>
:global(body) {
  width: 101px;
  height: 17px;

  font-family: 'Pretendard', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
  background: #031737;
}
</style>

<script lang="ts">
  import NavBar from '$components/navbar/NavBar.svelte';
</script>

<div>
  <NavBar />
  <slot />
</div>
