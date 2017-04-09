<template>
  <aside class="layout-app-sidebar">
    <app-logo></app-logo>
    <h3 class="md-subtitle">select a country</h3>
    <select ref="selectCountry" name="select-country" required class="md-select-country">
      <option v-for="country in countryList">{{ country }}</option>
    </select>

    <article class="layout-info">
      <p class="md-info" v-for="info of infos">{{ info }}</p>
    </article>

    <article class="layout-copyright">
      <p class="md-copyright">Made with &#10084; by Gustavo Domaradzki</p>
    </article>
  </aside>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: 'SelectCountry',
    props: ['countryList'],
    data () {
      return {
        infos: [
          'Development Assignment for Rebtel',
          'Thank you for using this App'
        ]
      }
    },
    created: function () {
      this.fetchCountriesNames()
    },
    mounted: function () {
      setInterval(() => {
      }, 1000)
    },
    methods: {
      fetchCountriesNames: function () {
        Axios.get('https://restcountries.eu/rest/v2/all?fields=name')
            .then((res) => {
              const maxLength = 33
              for (let i in res.data) {
                if (res.data[i].name.length >= maxLength) {
                  res.data[i].name.concat('...')
                  this.countryList.push(res.data[i].name.substr(0, maxLength).concat('...'))
                } else {
                  this.countryList.push(res.data[i].name.substr(0, maxLength))
                }
              }
            }).catch((error) => {
              console.log(error)
            })
      }
    }
  }
</script>

<style lang="scss">
  $primary-color: #e3232e;
  $secondary-color: #f1f1f1;

  .layout-app-sidebar {
    background-color: $primary-color;
    width: 320px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    padding: 0 15px;
    z-index: 100;
  }

  .layout-info {
    margin-top: 150px;
    .md-info {
      color: $secondary-color;
      text-align: center;
      font-size: 20px;
      opacity: 0;
      &:first-of-type {
        animation: introAnim .5s .6s forwards ease;
      }

      &:last-of-type {
        animation: introAnim .5s .8s forwards ease;
      }
    }
  }

  .md-copyright {
    color: $secondary-color;
    text-align: center;
    font-size: 14px;
    opacity: 0;
    animation: introAnim .5s 1s forwards ease;
    margin-top: 220px;
  }

  .md-subtitle {
    color: $secondary-color;
    text-transform: uppercase;
    font-size: 22px;
    text-align: center;
    margin: 30px 0;
    opacity: 0;
    animation: introAnim .5s .2s forwards ease;
  }

  .md-select-country {
    display: block;
    background-color: $secondary-color;
    max-width: 290px;

    opacity: 0;
    animation: introAnim .5s .4s forwards ease;
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
