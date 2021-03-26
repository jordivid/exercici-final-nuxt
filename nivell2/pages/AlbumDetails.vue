<template>
  <div class="container">
    <h3 class="mt-3 mb-3 text-center">
      {{ photos[0].title }}
    </h3>
    <div class="contenidor-fotos text-center">
      <img
        v-for="photo of photos"
        :key="photo.id"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
      >
    </div>
  </div>
</template>

<script src="~/scripts/albumDetails.js"></script>

<style lang="scss" src="~/assets/scss/albumDetails.scss"></style>
