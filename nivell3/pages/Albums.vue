<template>
  <div>
    <ContenidorFitxes titol="Albums">
      <div v-for="album of GetAlbums" :key="album.id" class="fitxa">
        <h6 class="text-center">
          {{ album.title }}
        </h6>
        <button class="btn btn-sm btn-primary mt-1" @click="Consulta(album.id)">
          Consultar
        </button>
      </div>
    </ContenidorFitxes>
  </div>
</template>

<script src="~/scripts/albums.js"></script>
