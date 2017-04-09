<template>
  <aside class="layout-select-country-sidebar">
    <h3 class="md-subtitle">select a country</h3>
    <select id="teta" ref="selectCountry" name="select-country" required class="md-select-country">
      <option v-for="country in countries">{{ country }}</option>
    </select>
  </aside>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: 'SelectCountry',
    data () {
      return {
        countries: []
      }
    },
    created: function () {
      this.fetchCountriesNames()
    },
    methods: {
      fetchCountriesNames: function () {
        Axios.get('https://restcountries.eu/rest/v2/all?fields=name')
            .then((res) => {
              const maxLength = 33
              for (let i in res.data) {
                if (res.data[i].name.length >= maxLength) {
                  res.data[i].name.concat('...')
                  this.countries.push(res.data[i].name.substr(0, maxLength).concat('...'))
                } else {
                  this.countries.push(res.data[i].name.substr(0, maxLength))
                }
              }
            }).catch((error) => {
              console.table(error)
            })
      }
    }
  }
</script>

<style lang="scss">
  $primary-color: #e3232e;
  $secondary-color: #f1f1f1;

  .layout-select-country-sidebar {
    background-color: $primary-color;
    width: 320px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0 15px;
  }

  .md-subtitle {
    color: $secondary-color;
    text-transform: uppercase;
    font-size: 22px;
    text-align: center;
    margin: 30px 0;
  }

  .md-select-country {
    display: block;
    background-color: $secondary-color;
    max-width: 290px;
  }

</style>
