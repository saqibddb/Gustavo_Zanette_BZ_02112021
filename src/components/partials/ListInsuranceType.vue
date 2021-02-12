<template>
  <ul class="row list-unstyled list-insurance-type">
    <!-- Professional Liability -->
    <li class="col-12 col-sm-6">
      <CardRadio
        icon="case"
        title="Professional Liability"
        text="Erros & Omissions (E&O insurance)"
        class="list-card h-100"
        name="insurance-type"
        id="insurance-type1"
      />
    </li>

    <!-- General Liability -->
    <li class="col-12 col-sm-6">
      <CardRadio
        icon="case"
        title="General Liability"
        text="Help mitigate against loss (CGL insurance)"
        class="list-card h-100"
        name="insurance-type"
        id="insurance-type2"
      />
    </li>

    <!-- Business Owner’s Policy -->
    <li class="col-12 col-sm-6">
      <CardRadio
        icon="case"
        title="Business Owner’s Policy"
        text="The complete package (BOP)"
        class="list-card h-100"
        name="insurance-type"
        id="insurance-type3"
      />
    </li>

    <!-- Cyber -->
    <li class="col-12 col-sm-6">
      <CardRadio
        icon="case"
        title="Cyber"
        text="Internet-bsed risks (CLIC)"
        class="list-card h-100"
        name="insurance-type"
        id="insurance-type4"
      />
    </li>
  </ul>
</template>

<script>
import CardRadio from './CardRadio.vue'

export default {
  components: {
    CardRadio,
  },
  name: 'ListInsuranceType',
}
</script>

<style scoped lang="scss">
  .list-insurance-type {
    align-items: stretch;
    margin-bottom: -23px;

    li {
      margin-bottom: 23px;
    }
  }
</style>
