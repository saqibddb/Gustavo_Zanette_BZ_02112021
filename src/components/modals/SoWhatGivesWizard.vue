<template>
  <div class="wizard">
    <!-- Wizard Steps -->
    <div class="wizard-steps px-3">
      <!-- Step 1 -->
      <SoWhatGivesWizardStep
        v-if="isActive(1)"
        :number="1"
        title="What type of insurance do you want?"
        :active="step === 1"
        class="wizard-step"
      >
        <ListInsuranceType />
      </SoWhatGivesWizardStep>

      <!-- Step 2 -->
      <SoWhatGivesWizardStep
        v-if="isActive(2)"
        :number="2"
        title="What’s the name of your business?"
        :active="step === 2"
        class="wizard-step"
      >
        <InputWithConfirm placeholder="Business Name" />
      </SoWhatGivesWizardStep>

      <!-- Call to action -->
      <button
        v-if="step === 2"
        class="btn btn-lg btn-success btn-get-quotes text-uppercase"
        @click="$emit('done')"
      >
        Get quotes
      </button>
    </div>

    <!-- Wizard Controls -->
    <SoWhatGivesWizardControls
      :step="step"
      :last="2"
      @backward="step -= 1"
      @forward="step += 1"
      class="wizard-controls"
    />
  </div>
</template>

<script>
import SoWhatGivesWizardControls from './SoWhatGivesWizardControls.vue'
import SoWhatGivesWizardStep from './SoWhatGivesWizardStep.vue'
import ListInsuranceType from '../partials/ListInsuranceType.vue'
import InputWithConfirm from '../partials/InputWithConfirm.vue'

export default {
  components: {
    SoWhatGivesWizardStep,
    SoWhatGivesWizardControls,
    ListInsuranceType,
    InputWithConfirm,
  },
  name: 'SoWhatGivesWizard',
  data: () => ({
    step: 1,
  }),
  methods: {
    isActive(step) {
      return step >= (this.step) && step <= this.step + 1;
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .wizard {
    display: flex;
    flex-direction: column;
  }

  .wizard-steps {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 40px;
  }

  .wizard-step {
    margin-top: 50px;

    &:first-child {
      margin: 0;
    }
  }

  .btn-get-quotes {
    width: 312px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    margin: 62px 0 25px;
    @include box-shadow($shadow);
  }

  .wizard-controls {
    margin-top: 20px;
  }

  @include media-breakpoint-up(md) {
    .wizard-steps {
      padding-top: 60px;
    }
    .wizard-step {
      margin-top: 83px;
    }
    .wizard-steps {
      max-width: 560px + $grid-gutter-width;
      max-height: 586px;
    }
  }
</style>
