<template>
  <section class="container home-page mt-3">
    <!-- So What Gives modal toggler -->
    <button
      v-b-modal.modal-so-what-gives
      class="btn btn-primary"
    >
      So what gives?
    </button>

    <!-- So What Gives modal -->
    <SoWhatGives id="modal-so-what-gives" />
  </section>
</template>

<script>
import SoWhatGives from '../components/modals/SoWhatGives.vue'

export default {
  components: {
    SoWhatGives,
  },
  name: 'HomePage',
}
</script>

<style scoped></style>
