<template>
  <div>
    <ContenidorFitxes titol="Usuaris">
      <div v-for="user of GetUsers" :key="user.id" class="fitxa">
        <h6>{{ user.name | Majuscules }}</h6>
        <button class="btn btn-sm btn-primary mt-1" @click="Consulta(user.id)">
          Consultar
        </button>
      </div>
    </ContenidorFitxes>
  </div>
</template>

<script src="~/scripts/users.js"></script>
