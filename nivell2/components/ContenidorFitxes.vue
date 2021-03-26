<template>
  <div>
    <h1 class="mt-3 mb-3 text-center">
      {{ titol }}
    </h1>
    <div class="container mb-2 d-flex flex-wrap align-content-start contenidor-fitxes">
      <slot />
    </div>
  </div>
</template>

<script src="~/scripts/contenidorFitxes.js">
</script>

<style lang="scss" src="~/assets/scss/contenidorFitxes.scss" scoped>
</style>
