<template>
  <div class="so-what-gives-home text-center">
    <!-- Logo -->
    <FilledCircle
      class="logo"
      :shadow="true"
    >
      <img
        alt="Umbrella Lab"
        src="../../assets/logo-blue.svg"
      >
    </FilledCircle>

    <!-- Title -->
    <h1 class="title">
      So what gives?
    </h1>

    <!-- Instructions -->
    <ListOrdered
      class="instructions"
      :list="instructions"
    />

    <!-- Call to action -->
    <button
      class="btn btn-lg btn-success btn-get-started text-uppercase"
      @click="$emit('start')"
    >
      Get started
    </button>

    <!-- Powered by text -->
    <PoweredBy />
  </div>
</template>

<script>
import FilledCircle from '../partials/FilledCircle.vue'
import ListOrdered from '../partials/ListOrdered.vue'
import PoweredBy from '../partials/PoweredBy.vue'

export default {
  components: {
    PoweredBy,
    FilledCircle,
    ListOrdered,
  },
  name: 'SoWhatGivesHome',
  data: () => ({
    instructions: [
      'Answer a few simple questions about your business',
      'Browse through specially curated quotes',
      'Select your quote-of-choice and receive your policy instantly',
    ],
  }),
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .so-what-gives-home {
    margin-bottom: 40px;
  }

  .logo {
    margin: 0 auto;
    margin-bottom: 37px;
  }

  .title {
    font-family: Roboto;
    font-weight: bold;
    font-size: 44px;
    margin: 0 0 60px;
  }

  .instructions {
    max-width: 510px;
    margin: 0 auto 62px;
  }

  .btn-get-started {
    width: 312px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 25px;
    @include box-shadow($shadow);
  }

  @include media-breakpoint-down(sm) {
    .title {
      font-size: 40px;
    }
  }
</style>
