<template>
  <main class="layout-home-page">
    <h1 class="md-title">Are you ready to be a <span class="md-rebtel">Rebel</span>?</h1>
  </main>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss">
  $primary-color: #e3232e;
  $secondary-color: #f1f1f1;

  body {
    background-color: $secondary-color;
  }

  .layout-home-page {

  }

  .md-title {
    color: $primary-color
  }

  .md-rebtel {
    background-color: $primary-color;
    color: $secondary-color;
    padding: 5px 15px;
    display: inline-block;
    animation: rebtelAnim 1s 3s forwards ease;
  }

  @keyframes rebtelAnim {
    50% {
      transform: rotateY(180deg);
    }

    to {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }
</style>
