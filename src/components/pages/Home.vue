<template>
  <main class="layout-home-page">
    <h1 class="md-title">Are you ready to be a <span class="md-rebtel">Rebel</span>?</h1>
    <h2 class="md-subtitle-info">Get to know more about your world!</h2>
    <section class="layout-country-info" :class=" isVisible ? 'is-area-visible' : 'is-area-hidden' ">
      <div class="row">
        <div class="col s12">
          <h3 class="md-country-name">{{ country.name }}</h3>
        </div>
        <div class="col s12 m8 l5">
          <h4 class="md-country-name md-native-name">{{ country.nativeName }}</h4>
          <img class="md-country-flag" :src="country.flag" :alt="country.name">
        </div>
        <div class="col s12 m4 l7">
          <h5 class="md-info-label">Capital</h5>
          <p class="md-country-text">{{ country.capital }}</p>
          <h5 class="md-info-label">Calling Codes</h5>
          <p class="md-country-text" v-for="codes in country.callingCodes">{{ codes }}</p>
          <h5 class="md-info-label">Region</h5>
          <p class="md-country-text">{{ country.region }}</p>
          <h5 class="md-info-label">Currencies</h5>
          <div class="layout-country-currencies" v-for="currency in country.currencies">
          </div>
          <ul class=" layout-country-currencies" v-for="currency in country.currencies">
            <li class="md-country-text">Code: {{ currency.code }}</li>
            <li class="md-country-text">Name: {{ currency.name }}</li>
            <li class="md-country-text">Symbol: {{ currency.symbol }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    props: ['country', 'isVisible']
  }
</script>

<style lang="scss">
  $primary-color: #e3232e;
  $secondary-color: #f1f1f1;

  body {
    background-color: $secondary-color;
  }

  .layout-home-page {
    position: relative;

    @media (max-width: 800px) {
      margin-top: 180px;
    }
  }

  .md-title {
    color: $primary-color;
    line-height: 1;
    font-size: 50px;
    margin-top: 15px;

    @media (max-width: 1024px) {
      line-height: 1.5;
      font-size: 40px;
    }

    @media (max-width: 800px) {
      text-align: center;
    }
  }

  .md-subtitle-info {
    font-size: 42px;
    color: #1e1e1e;

    @media (max-width: 1024px) {
      font-size: 32px;
    }

    @media (max-width: 800px) {
      text-align: center;
    }
  }

  .md-rebtel {
    background-color: $primary-color;
    color: $secondary-color;
    padding: 5px 15px;
    display: inline-block;
    animation: rebtelAnim 1s 3s forwards ease;
  }

  .layout-country-info {
    margin-top: 30px;
    padding: 25px 0 20px;

    .row {
      margin-bottom: 0;
    }

    .md-country-name {
      color: #1e1e1e;
    }

    .md-native-name {
      font-size: 20px;
    }

    .md-country-text {
      font-size: 16px;
      color: #565656;
      margin: 5px 0;
    }

    .md-country-flag {
      width: 100%;
      display: block;
      margin: 30px 0;
    }

    .layout-country-currencies {
      display: flex;
      justify-content: space-between;
      margin-top: 0;

      @media (max-width: 1200px) {
        flex-direction: column;
      }
    }

    @media (max-width: 600px) {
      text-align: center;
    }
  }

  .is-area-hidden {
    transition: .3s ease;
    opacity: 0;
    transform: translateY(-60px);
    position: absolute;
    z-index: -1;
    width: 100%;
  }
  .is-area-visible {
    transition: .5s ease;
    opacity: 1;
    transform: translateY(0);
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
