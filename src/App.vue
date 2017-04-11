<template>
  <div id="app">
    <div class="container">
      <app-side-bar :countryList="countryList"
                    :countrySelectHandler="countrySelectHandler"
                    @toggleVisible="isVisible = true">
      </app-side-bar>
      <div class="row">
        <div class="col s12 m12 l10">
          <router-view :country="country" :isVisible="isVisible"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        countryList: [],
        country: [],
        isVisible: false
      }
    },
    created: function () {
      this.fetchCountriesNames()
    },
    methods: {
      fetchCountriesNames () {
        Axios.get('https://restcountries.eu/rest/v2/all?fields=name')
            .then((res) => {
              this.countryList = res.data.map(country => country.name)
            }).catch((error) => {
              console.log(error)
            })
      },
      fetchCountry (name) {
        Axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(({data}) => {
              this.country = data.length ? data[0] : null
            }).catch((error) => {
              console.log(error)
            })
      },
      /* Callbacak that is passed into the SideBar,
        It gets called when the user selects a country */
      countrySelectHandler (name) {
        this.fetchCountry(name)
      }
    }
  }
</script>

<style lang="scss">
  .container {
    position: relative;
  }
</style>
