<template>
  <div class="app">
    <Header />
    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import Header from './components/common/Header.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header,
  },
}
</script>

<style lang="scss">
  @import 'theme/utils.scss';
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $gray1;
    line-height: 1.2;
  }

  @include media-breakpoint-down(sm) {
    .modal-dialog {
      width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    .modal-content {
      height: auto;
      min-height: 100%;
      border-radius: 0;
    }
  }
</style>
