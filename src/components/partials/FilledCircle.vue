<template>
  <div
    :class="[
      'filled-circle bg-secondary text-primary',
      shadow && 'has-shadow',
    ]"
    :style="{ width: size, height: size }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FilledCircle',
  props: {
    size: {
      type: String,
      default: '100px',
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .filled-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    flex-shrink: 0;
    flex-grow: 0;

    &.has-shadow {
      @include box-shadow($shadow);
    }
  }
</style>
