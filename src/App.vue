<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <app-select-country></app-select-country>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
</style>
