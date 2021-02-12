<template>
  <section
    :class="[
      'wizard-step',
      !active && 'unactive'
    ]"
  >
    <!-- Step Header -->
    <header class="wizard-step-header">
      <h5 class="title">
        <FilledCircle
          class="circle"
          size="37px"
        >
          {{ number }}
        </FilledCircle>

        {{ title }}
      </h5>
    </header>

    <!-- Step Content -->
    <slot />
  </section>
</template>

<script>
import FilledCircle from '../partials/FilledCircle.vue'

export default {
  components: {
    FilledCircle,
  },
  name: 'SoWhatGivesWizardStep',
  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .wizard-step {
    &.unactive {
      opacity: 0.1;
      pointer-events: none;
    }
  }

  .wizard-step-header {
    margin-bottom: 40px;

    .title {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 24px;

      .circle {
        margin-right: 21px;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }

  @include media-breakpoint-up(md) {
    .wizard-step-header {
      margin-bottom: 52px;

      .title {
        font-size: 33px;
      }
    }
  }
</style>
