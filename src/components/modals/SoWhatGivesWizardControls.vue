<template>
  <div class="wizard-controls bg-primary text-white">
    <!-- Current Step -->
    <strong class="wizard-controls-step">
      {{ step }}/2
    </strong>

    <!-- Controls -->
    <div class="wizard-controls-btns">
      <!-- Button Backward -->
      <button
        type="button"
        class="btn btn-light"
        :disabled="step === 1"
        @click="$emit('backward')"
      >
        <img
          alt="Up"
          src="../../assets/icon-arrow-up.svg"
        >
      </button>

      <!-- Button Forward -->
      <button
        type="button"
        class="btn btn-light"
        :disabled="step === last"
        @click="$emit('forward')"
      >
        <img
          alt="Up"
          src="../../assets/icon-arrow-up.svg"
          class="invert"
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoWhatGivesWizardControls',
  props: {
    step: {
      type: Number,
      required: true,
    },
    last: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .wizard-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px $grid-gutter-width;
    height: 60px;
  }
  .wizard-controls-step {
    font-size: 18px;
  }
  .wizard-controls-btns button {
    margin-left: 8px;
    border-radius: 2px;
    padding: 5px 10px;

    .invert {
      @include transform(rotate(180deg));
    }
  }
</style>
