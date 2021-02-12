<template>
  <div class="so-what-gives-payment text-center px-3">
    <div class="content-wrapper">
      <!-- Logo -->
      <FilledCircle
        class="logo"
        :shadow="true"
      >
        <img
          alt="Briza"
          src="../../assets/logo-briza-blue.svg"
        >
      </FilledCircle>

      <!-- Title -->
      <h1 class="title">
        Fast like the wind!
      </h1>

      <!-- Subtitle -->
      <p class="subtitle">
        We dove deep through the internet to get you these great quotes
      </p>

      <!-- Quotes -->
      <div class="quotes">
        <ul class="list-unstyled row quote-list align-items-stretch">
          <!-- Progressive -->
          <li class="col-12 col-sm-6">
            <CardQuote
              logo="progressive"
              :rating="4.5"
              :priceMo="120"
              :priceYear="1440"
              class="card-quote h-100"
            />
          </li>

          <!-- Geico -->
          <li class="col-12 col-sm-6">
            <CardQuote
              logo="geico"
              :rating="4"
              :priceMo="120"
              :priceYear="1500"
              class="card-quote h-100"
            />
          </li>

          <!-- State Farm -->
          <li class="col-12 col-sm-6">
            <CardQuote
              logo="statefarm"
              :rating="3.5"
              :priceMo="120"
              :priceYear="1500"
              class="card-quote h-100"
            />
          </li>
        </ul>
      </div>

      <!-- Summary -->
      <div class="summary">
        <h3>Your Summary:</h3>
        <p><span class="highlight">Hoop Heaven</span>, established on <time class="highlight">Dec 12 2012</time>, and operating out of <span class="highlight">Texas</span>, is interested in purchasing <span class="highlight">cyber insurance</span>.</p>

        <p>Hoop Heaven would also like <span class="highlight">building coverage included</span> in their policy. </p>

        <p>Hoop Heaven does their own <span class="highlight">designs in-house</span>.</p>

        <p>Hoop Heaven can be reached at <span class="highlight">231-676-4324</span>.</p>
      </div>
    </div>
  </div>
</template>

<script>
import FilledCircle from '../partials/FilledCircle.vue'
import CardQuote from '../partials/CardQuote.vue'

export default {
  components: {
    FilledCircle,
    CardQuote,
  },
  name: 'SoWhatGivesPayment',
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .so-what-gives-payment {
    margin: 23px 0 95px;

    .content-wrapper {
      max-width: 505px;
      margin: 0 auto;
    }

    .logo {
      margin: 0 auto 45px;
    }

    .title {
      font-size: 38px;
      margin: 0 0 10px;
    }

    .subtitle {
      font-size: 20px;
      margin: 0 0 60px;
    }

    .quotes {
      margin: 0 0 22px;

      li {
        margin-bottom: 27px;
      }
      .card-quote:hover {
        border-color: theme-color('primary');
      }
    }

    .summary {
      text-align: left;

      h3 {
        font-weight: 500;
        font-size: 20px;
        margin: 0 0 23px;
      }

      .highlight {
        color: theme-color('primary');
        text-decoration: underline;
        font-weight: 500;
      }
    }
  }

  @include media-breakpoint-up(md) {
    .so-what-gives-payment {
      .logo {
        margin: 0 auto 35px;
      }
      .title {
        font-size: 44px;
      }
      .subtitle {
        font-size: 22px;
        margin: 0 0 37px;
      }
    }
  }
</style>
