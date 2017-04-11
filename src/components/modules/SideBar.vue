<template>
  <div class="app-side-bar" :class="isVisible ? 'app-side-bar-active' : 'app-side-bar-inactive'">
    <app-logo @toggleVisible="isVisible = !isVisible"
              @wasStarted="wasClicked = true">
    </app-logo>
    <aside class="layout-app-sidebar" :class="isVisible ? 'is-area-visible' : 'is-area-hidden'">
      <h3 class="md-subtitle">select a country</h3>
      <select name="select-country" required class="md-select-country" v-model="selectedCountry">
        <option hidden value="">Choose one</option>
        <option v-for="country in countryOptions":value="country.name">{{ country.label }}</option>
      </select>
      <button class="md-magic-button" @click="buttonClickHandler(); mobileButtonClickHandler()">Magic!</button>

      <article class="layout-info">
        <p class="md-info" v-for="info of infos">{{ info }}</p>
      </article>

      <article class="layout-copyright">
        <p class="md-copyright">Made with &#10084; by Gustavo Domaradzki</p>
      </article>
    </aside>
  </div>
</template>

<script>
  import { truncateName } from '../../assets/js/utils.js'
  export default {
    name: 'SelectCountry',
    props: ['countryList', 'countrySelectHandler'],
    data () {
      return {
        infos: [
          'Development Assignment for Rebtel',
          'Thank you for using this App'
        ],
        selectedCountry: '',
        isVisible: false,
        wasClicked: false
      }
    },
    computed: {
      countryOptions () {
        return this.countryList.map(name => ({
          label: truncateName(name, 29),
          name
        }))
      }
    },
    methods: {
      buttonClickHandler () {
        this.$emit('toggleVisible')
        this.countrySelectHandler(this.selectedCountry)
      },
      // Closes the SideBar in case resolution is 800px or less
      mobileButtonClickHandler () {
        let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
        const targetWidth = 800

        if (width <= targetWidth) {
          this.isVisible = !this.isVisible
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $primary-color: #e3232e;
  $secondary-color: #f1f1f1;

  .app-side-bar {
    width: 320px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    padding: 0 15px;
    height: 100%;
    z-index: 150;

    @media (max-width: 600px) {
      width: 100%;
    }
  }

  .app-side-bar-active {
    transition: background-color .3s ease;
    background-color: $primary-color;
    z-index: 100;
  }

  .app-side-bar-inactive {
    transition: background-color .8s ease;
    background-color: transparent;
  }

  .layout-app-sidebar {
    background-color: $primary-color;
    padding: 0 15px;
    height: 100%;
  }

  .md-magic-button {
    background: none;
    border: 2px solid $secondary-color;
    width: 100%;
    margin: 15px 0;
    height: 35px;
    text-transform: uppercase;
    color: $secondary-color;
    position: relative;
    opacity: 0;
    animation: introAnim .5s .6s forwards ease;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 100%;
      background-color: $secondary-color;
      transition: .5s ease;
      z-index: -1;
    }

    &:hover {
      color: $primary-color;
      &:before {
        width: 100%;
        left: 0;
      }
    }

    &:focus, &:active {
      border: none;
      background-color: darken($primary-color, 10%);
    }
  }

  .layout-info {
    margin-top: 150px;
    .md-info {
      color: $secondary-color;
      text-align: center;
      font-size: 20px;
      opacity: 0;
      &:first-of-type {
        animation: introAnim .5s .8s forwards ease;
      }

      &:last-of-type {
        animation: introAnim .5s 1s forwards ease;
      }
    }

    @media (max-width: 1024px) {
      margin-top: 50px;
    }
  }

  .md-copyright {
    color: $secondary-color;
    text-align: center;
    font-size: 14px;
    opacity: 0;
    animation: introAnim .5s 1.2s forwards ease;
    margin-top: 160px;
  }

  .md-subtitle {
    color: $secondary-color;
    text-transform: uppercase;
    font-size: 22px;
    text-align: center;
    opacity: 0;
    animation: introAnim .5s .2s forwards ease;
    margin: 0 0 30px;
    padding-top: 40px;
  }

  .md-select-country {
    display: block;
    background-color: $secondary-color;
    width: 100%;
    opacity: 0;
    animation: introAnim .5s .4s forwards ease;
  }

  .is-area-hidden {
    display: none;
  }

  @keyframes introAnim {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>
