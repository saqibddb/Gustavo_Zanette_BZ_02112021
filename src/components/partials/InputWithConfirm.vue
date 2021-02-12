<template>
  <form class="input-with-confirm" novalidate>
    <!-- Form Input -->
    <input
      v-model="text"
      class="form-control"
      type="text"
      :placeholder="placeholder"
    >

    <!-- Error message -->
    <small
      v-if="error"
      class="d-block error-text text-danger mt-2"
    >
      Oh please, do it right ok?
    </small>

    <!-- Submit button -->
    <button
      type="button"
      class="btn btn-lg btn-secondary text-primary btn-confirm"
      @click="onButtonClick()"
    >
      OK
      <img
        alt="Check"
        src="../../assets/icon-check.svg"
      >
    </button>
  </form>
</template>

<script>
export default {
  name: 'InputWithConfirm',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    error: false,
    text: '',
  }),
  watch: {
    text() {
      this.error = !this.validate();
    },
  },
  methods: {
    validate() {
      return !!this.text;
    },
    onButtonClick() {
      this.error = !this.validate();

      if (this.error) {
        return;
      }

      this.$emit('done', this.text);
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .input-with-confirm {
    .form-control {
      border: 0;
      border-bottom: 1px solid $gray1;
      border-radius: 0;
      padding: 7px 0;
      color: theme-color('primary');
      @include box-shadow(none);
    }

    .btn-confirm {
      display: flex;
      align-items: center;
      margin-top: 30px;
      font-weight: 500;
      font-size: 18px;
      @include box-shadow($shadow);

      img {
        margin-left: 12px;
      }
    }
  }
</style>
