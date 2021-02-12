<template>
  <div class="card-radio form-check">
    <!-- Form Input -->
    <input
      class="form-check-input"
      type="radio"
      :name="name"
      :id="id"
      value="option1"
    >

    <!-- Input Label -->
    <label
      class="form-check-label"
      :for="id"
    >
      <Card class="list-card h-100">
        <!-- Image -->
        <img
          v-if="iconSrc"
          :alt="icon"
          :src="iconSrc"
          class="list-card-image"
        >

        <!-- Content -->
        <div class="list-card-content">
          <!-- Title -->
          <h6
            v-if="title"
            class="title"
          >
            {{ title }}
          </h6>

          <!-- Text -->
          <p
            v-if="text"
            class="text"
          >
            {{ text }}
          </p>
        </div>
      </Card>
    </label>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card,
  },
  name: 'CardRadio',
  props: {
    icon: String,
    title: String,
    text: String,
    name: String,
    id: String,
  },
  computed: {
    iconSrc() {
      return this.icon
        ? require(`../../assets/icon-${this.icon}.svg`)
        : null;
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../../theme/utils.scss';

  .card-radio {
    &.form-check {
      padding: 0;
      height: 100%;
    }
    .form-check-input {
      display: none;
    }
    .form-check-label {
      display: block;
      height: 100%;
    }

    input[type="radio"]:checked + label .list-card {
      border-color: theme-color('secondary');
      background-color: theme-color('secondary');
    }

    .list-card {
      min-height: 76px;
      cursor: pointer;
    }

    .list-card-image {
      flex-shrink: 0;
      flex-grow: 0;
      margin-right: 14px;
    }

    .list-card-content {
      flex: 1;

      .title {
        font-weight: 500;
        font-size: 15px;
        margin: 0 0 4px;
      }
      .text {
        font-size: 10px;
        margin: 0;
      }
    }
  }
</style>
