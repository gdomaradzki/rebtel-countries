<template>
  <div class="layout-app-logo">
    <svg class="app-logo" @click="$emit('toggleVisible'); $emit('wasStarted'); isActive = !isActive; wasClicked = true" :class=" isActive ? 'is-active' : 'is-inactive'" mlns="http://www.w3.org/2000/svg" viewBox="0 0 566.9 220.7"><path fill="#E3232C" d="M0 0h566.9v220.7H0z"/><path fill="#FFF" d="M415.8 51.4h23.9l18 47.6h20.8V51.4h22.7V173h-43.5c-15.2 0-26.3-3.4-33.4-10.3-7.1-6.8-10.7-15.7-10.7-26.6 0-16.2 7.6-27.3 22.7-33.3l-20.5-51.4zm62.7 65.8h-17.2c-8.2 0-14.2 1.7-18.2 5.2-4 3.4-6 8.2-6 14.2 0 5.5 2 10 5.9 13.4 3.9 3.4 9.4 5.1 16.5 5.1h19v-37.9zM387.8 85.7c-.5-13-6.9-20.1-18.6-20.1-7.8 0-13 3-17.7 10.1L332 72.5c6.2-15.3 19.1-23.4 36.6-23.4 24.7 0 40.6 15.6 40.6 39.9 0 24.3-15.5 40.1-39.4 40.1-23.8 0-38.5-15.5-38.5-40.3v-3.1h56.5zM351.5 99c2.3 9.7 8.5 14.9 17.7 14.9 9.5 0 15.8-5.4 17.7-14.9h-35.4zM296.1 116.9c-7.5 8.5-14.9 12.2-24.8 12.2-20.8 0-36.8-17.2-36.8-39.8 0-23.1 15.8-40.3 37.2-40.3 10.2 0 17.7 3.6 24.5 12.2v-9.7h21v121.6h-21v-56.2zm-.5-27.8c0-11.6-9.6-21.2-21-21.2-11.8 0-21.2 9.4-21.2 21 0 11.8 9.4 21.2 21.2 21.2 11.6 0 21-9.3 21-21zM196.1 51.4h21v57h11.1v18.2h-11.1v25.7h-21v-25.7H185v-18.2h11.1v-57zM157.3 85.7c-.5-13-6.9-20.1-18.6-20.1-7.8 0-13 3-17.7 10.1l-19.4-3.1c6.2-15.3 19.1-23.4 36.6-23.4 24.7 0 40.6 15.6 40.6 39.9 0 24.3-15.5 40.1-39.4 40.1-23.8 0-38.5-15.5-38.5-40.3v-3.1h56.4zM121 99c2.3 9.7 8.5 14.9 17.7 14.9 9.5 0 15.8-5.4 17.7-14.9H121zM65.7 51.4h21V173h-21V51.4z"/>
    </svg>
    <p class="md-side-bar-start-reminder" @click="$emit('toggleVisible'); $emit('wasStarted'); isActive = !isActive; wasClicked = true" :class="wasClicked ? 'app-reminder-inactive' : 'app-reminder-active'">
      click me to start
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Logo',
    props: ['isVisible'],
    data () {
      return {
        isActive: false,
        wasClicked: false
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  $primary-color: #e3232e;
  $secondary-color: #f1f1f1;

  .app-logo {
    width: 130px;
    height: 50px;
    margin: 15px auto;
    display: block;
    cursor: pointer;
    animation: inactiveAnim .5s forwards ease;
  }

  .md-side-bar-start-reminder {
    text-transform: uppercase;
    text-align: center;
    color: $primary-color;
    cursor: pointer;
  }

  .is-active {
    animation: activeAnim .5s normal forwards ease;
  }

  .app-reminder-active {
    display: block;
  }

  .app-reminder-inactive {
    display: none;
  }

  @keyframes activeAnim {
    from {
      transform: translateY(0px) rotateY(180deg) rotateX(180deg);
    }

    50% {
      transform: translateY(0) rotateY(0) rotateX(180deg);
    }

    to {
      transform: translateY(0) rotateY(0) rotateX(0);
    }
  }

  @keyframes inactiveAnim {
    from {
      transform: translateY(0) rotateY(0) rotateX(0);
    }

    50% {
      transform: translateY(0) rotateY(0) rotateX(180deg);
    }

    to {
      transform: translateY(0px) rotateY(180deg) rotateX(180deg);
    }
  }
</style>
