<template>
  <div id="app">
    <div class="container">
      <app-side-bar :countryList="countryList"
                    :country="country"
                    @chooseCountry="chosenCountry($event)"
                    :countryValidator="countryValidator"
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
      // setInterval(() => {
      //   console.log(this.country)
      // }, 1000)
    },
    methods: {
      showInfo (visible) {
        this.$set(this.area.isVisible, 'visible', visible)
      },
      chosenCountry (country) {
        this.$set(this.country, 'country', country)
      },
      countryValidator () {
        const chosenCountry = this.country.country
        Axios.get('https://restcountries.eu/rest/v2/name/' + chosenCountry)
            .then((res) => {
              this.country = res.data
              this.countryParser(res.data)
            }).catch((error) => {
              console.log(error)
            })
      },
      countryParser () {
        const country = this.country
        for (let i in country) {
          let countryObject = country[i]
          let firstKey = Object.keys(countryObject)[0]
          let value = countryObject[firstKey]
          this.country = value
        }
        console.log(this.country)
      },
      fetchCountriesNames () {
        Axios.get('https://restcountries.eu/rest/v2/all?fields=name')
            .then((res) => {
              const maxLength = 29
              this.countryList = res.data.map(({name}) => this.truncateNames(name, maxLength))
            }).catch((error) => {
              console.log(error)
            })
      },
      truncateNames: (name, maxLength) =>
        name.length >= maxLength ? `${name.slice(0, maxLength)}...` : name
      // truncateNames (name, maxLength) {
      //   return name.length >= maxLength ? `${name.slice(0, maxLength)}...` : name
      // }
    }
  }
</script>

<style lang="scss">
  .container {
    position: relative;
  }

  * {
    // border: 1px solid blue;
  }
</style>
