<template>
  <b-modal
    :id="id"
    hide-footer
    dialog-class="so-what-gives"
    header-class="so-what-gives-header"
    body-class="d-flex p-0"
  >
    <!-- Header -->
    <template #modal-header="{ close }">
      <!-- Title -->
      <h4
        v-if="stage !== 'home'"
        class="title"
      >
        <img
          alt="Umbrella Lab"
          src="../../assets/logo-blue.svg"
          width="30"
        >
        Umbrella Hub
      </h4>

      <!-- Close Button -->
      <button
        type="button"
        class="btn btn-link btn-close"
        aria-label="Close"
        @click="close()"
      >×</button>
    </template>

    <!-- Home Screen -->
    <SoWhatGivesHome
      v-if="stage === 'home'"
      class="w-100 p-3"
      @start="stage = 'questions'"
    />

    <!-- Questions -->
    <SoWhatGivesWizard
      v-else-if="stage === 'questions'"
      class="w-100"
      @done="stage = 'payment'"
    />

    <!-- Payment -->
    <SoWhatGivesPayment
      v-else-if="stage === 'payment'"
      class="w-100"
    />
  </b-modal>
</template>

<script>
import SoWhatGivesHome from './SoWhatGivesHome.vue'
import SoWhatGivesWizard from './SoWhatGivesWizard.vue'
import SoWhatGivesPayment from './SoWhatGivesPayment.vue'

export default {
  components: {
    SoWhatGivesHome,
    SoWhatGivesWizard,
    SoWhatGivesPayment,
  },
  name: 'SoWhatGives',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    stage: 'home',
  }),
}
</script>

<style lang="scss">
  @import '../../theme/utils.scss';

  $buttonCloseWidth: 70px;
  $buttonCloseHeight: 66px;

  .so-what-gives {
    max-width: none !important; // Override Bootstrap style
  }

  .so-what-gives-header {
    align-items: center !important; // Override Bootstrap style
    border: none !important; // Override Bootstrap style
    padding: 26px ($grid-gutter-width + $buttonCloseWidth) 0 $grid-gutter-width !important; // Override Bootstrap style
    position: relative;

    .title {
      display: flex;
      align-items: center;
      font-size: 17px;
      font-weight: normal;
      color: #0074D9;

      img {
        margin-right: 10px;
      }
    }

    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 34px;
      line-height: 1;
      padding: 0;
      width: $buttonCloseWidth;
      height: $buttonCloseHeight;

      &:hover {
        text-decoration: none;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .so-what-gives {
      height: 100%;
    }
  }
  @include media-breakpoint-up(md) {
    .so-what-gives {
      max-width: 690px !important; // Override Bootstrap style

      .modal-content {
        min-height: 710px;
      }
    }
  }
</style>
