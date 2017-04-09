<template>
  <div id="app">
    <div class="container">
      <app-side-bar :countryList="countryList"></app-side-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        countryList: []
      }
    }
  }
</script>

<style lang="scss">
</style>
