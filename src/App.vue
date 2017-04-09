<template>
  <div id="app">
    <div class="container">
      <app-side-bar :countryList="countryList"
                    :country="country"
                    @chooseCountry="chosenCountry($event)"
                    :countryValidator="countryValidator">
      </app-side-bar>
      <div class="row">
        <div class="col s12 m10">
          <router-view :country="country"></router-view>
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
        country: []
      }
    },
    methods: {
      chosenCountry (country) {
        this.$set(this.country, 'country', country)
      },
      countryValidator () {
        let chosenCountry = this.country.country
        Axios.get('https://restcountries.eu/rest/v2/name/' + chosenCountry)
            .then((res) => {
              this.country = []
              this.country.push(res.data)
              this.countryParser()
            }).catch((error) => {
              console.log(error)
            })
      },
      countryParser () {
        let country = this.country
        for (let i = 0; i < country.length; i++) {
          let countryObject = country[i]
          let firstKey = Object.keys(countryObject)[0]
          let value = countryObject[firstKey]
          this.country = []
          this.country = value
        }
      }
    }
    // mounted: function () {
    //   setInterval(() => {
    //     console.log(this.country)
    //   }, 1000)
    // }
  }
</script>

<style lang="scss">
</style>
