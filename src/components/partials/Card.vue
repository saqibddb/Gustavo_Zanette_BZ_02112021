<template>
  <div class="umbrella-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .umbrella-card {
    background: white;
    border: 2px solid $gray4;
    @include box-shadow($shadow);
    border-radius: 3.45455px;
    padding: 10px 17px;
    display: flex;
    align-items: center;
  }
</style>
