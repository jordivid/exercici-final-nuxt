<template>
  <div id="homeContainer" class="container">
    <div class="row d-flex justify-content-center mt-4">
      <div class="col-sm-8 col-md-5 col-xl-4 mt-2">
        <div class="info-box mb-2">
          <h3 class="text-center">
            Usuaris consultats
          </h3>
          <p v-if="GetVisitedUsers.length == 0" class="text-center">
            De moment cap ni un
          </p>
          <table v-else class="w-100 table">
            <tr v-for="usuari of GetVisitedUsers" :key="usuari.id">
              <td class="text-left w-75">
                {{ usuari.name | Majuscules }}
              </td>
              <td class="text-right w-25">
                {{ usuari.visits }}
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-sm-8 col-md-5 col-xl-4 mt-2">
        <div class="info-box mb-2">
          <h3 class="text-center">
            Albums consultats
          </h3>
          <p v-if="GetVisitedAlbums.length == 0" class="text-center">
            De moment cap ni un
          </p>
          <table v-else class="w-100 table">
            <tr v-for="album of GetVisitedAlbums" :key="album.id">
              <td class="text-left w-75">
                {{ album.title }}
              </td>
              <td class="text-right w-25">
                {{ album.visits }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="~/scripts/home.js"></script>

<style lang="scss" src="~/assets/scss/home.scss" scoped>
</style>
