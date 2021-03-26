<template>
  <div class="container">
    <div class="row d-flex justify-content-center mt-3 mb-2">
      <div class="col-sm-12 col-md-6 col-xl-5 info-box">
        <h3 class="mb-3 text-center">
          {{ name | Majuscules }}
        </h3>
        <table class="w-100">
          <tr v-for="[key, value] of usuari" :key="key">
            <td class="text-left w-50">
              {{ key }}:
            </td>
            <td class="text-left w-50">
              {{ value }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="~/scripts/userDetails.js"></script>
