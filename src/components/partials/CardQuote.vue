<template>
  <Card class="quote-card">
    <!-- Card Image -->
    <div class="logo-wrapper">
      <img
        v-if="imageSrc"
        alt="logo"
        :src="imageSrc"
        class="logo-image"
      >
    </div>

    <!-- Card Rating -->
    <div class="rating">
      <div
        class="rating-value"
        :style="{ width: (rating * 100) / 5 + '%' }"
      />
    </div>

    <!-- Monthly Price -->
    <div class="price">
      <strong class="value">
        ${{ priceMo }}
      </strong>
      /mo
    </div>

    <!-- Yearly Price -->
    <div class="price-year">
      ${{ priceYear }} per year
    </div>

    <!-- Call to action -->
    <button class="btn btn-success btn-buy text-uppercase">
      Buy now
    </button>
  </Card>
</template>

<script>
import Card from '../partials/Card.vue'

export default {
  components: {
    Card,
  },
  name: 'CardQuote',
  props: {
    logo: String,
    rating: {
      type: Number,
      required: true,
    },
    priceMo: {
      type: Number,
      required: true,
    },
    priceYear: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return this.logo
        ? require(`../../assets/logo-${this.logo}.png`)
        : null;
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .quote-card {
    flex-direction: column;
    padding: 27px 17px;

    .logo-wrapper {
      height: 33px;
      margin: 0 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo-image {
      max-height: 100%;
      width: auto;
    }
    .rating,
    .rating-value {
      width: 90px;
      height: 17px;
    }
    .rating {
      margin: 0 0 46px;
      background-image: url('../../assets/icon-star-gray.svg');
    }
    .rating-value {
      background-image: url('../../assets/icon-star-blue.svg');
    }
    .price {
      display: flex;
      align-items: baseline;
      justify-content: center;
      margin: 0 0 6px;
      font-size: 18px;
      line-height: 1;

      .value {
        font-size: 32px;
      }
    }
    .price-year {
      margin: 0 0 46px;
      font-weight: 500;
      font-size: 12.6055px;
      color: $gray3;
    }

    .btn-buy {
      width: 100%;
      font-weight: bold;
      font-size: 14px;
    }
  }
</style>
