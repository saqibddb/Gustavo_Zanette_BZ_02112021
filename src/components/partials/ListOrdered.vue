<template>
  <ol class="list-unstyled list-ordered">
    <li
      v-for="(item, index) in list"
      :key="item"
    >
      <!-- Index -->
      <FilledCircle
        class="list-ordered-badge"
        size="36px"
      >{{ index + 1 }}</FilledCircle>

      <!-- Text -->
      {{ item }}
    </li>
  </ol>
</template>

<script>
import FilledCircle from '../partials/FilledCircle.vue'

export default {
  components: { FilledCircle },
  name: 'ListOrdered',
  props: {
    list: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .list-ordered li {
    display: flex;
    align-items: center;
    margin-top: 29px;
    font-size: 18px;
    text-align: left;

    &:first-child {
      margin-top: 0;
    }
  }

  .list-ordered-badge {
    margin-right: 21px;
    font-size: 18px;
    font-weight: bold;
  }

  @include media-breakpoint-down(sm) {
    .list-ordered li {
      margin-top: 23px;
    }
  }
</style>
