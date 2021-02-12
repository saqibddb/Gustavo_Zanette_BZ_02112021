<template>
  <p class="powered-by">
    <!-- Briza icon -->
    <img src="../../assets/briza-icon.svg">

    <!-- Text -->
    Powered by Briza
  </p>
</template>

<script>
export default {
  name: 'PoweredBy',
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .powered-by {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: $gray4;
    margin: 0;

    img {
      margin-right: 7px;
    }

    @include media-breakpoint-down(sm) {
      font-size: 14px;
    }
  }

</style>
