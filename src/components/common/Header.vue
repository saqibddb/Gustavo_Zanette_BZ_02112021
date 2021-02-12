<template>
  <header class="main-header bg-dark text-white">
    <div class="container main-header-content">
      <div class="logo text-uppercase">
        Umbrella <strong>Lab</strong>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  .main-header-content {
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
  }
</style>
