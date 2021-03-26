<template>
  <div>
    <div class="content">
      <header>
        <nav class="navbar navbar-expand-md navbar-dark">
          <div class="navbar-brand">
            <img
              src="~/assets/img/Wolfenstein-5-icon.png"
              alt="Logo"
              width="40"
              height="auto"
            >
          </div>
          <form id="formulari" class="form-inline">
            <div class="input-group" style="width: 200px">
              <input
                v-model.trim="search"
                type="text"
                class="form-control"
                placeholder="Nom usuari"
                @keyup="ListUsers"
                @focus="ClearSearch"
              >
              <div class="input-group-append">
                <span id="lupa" class="input-group-text material-icons">
                  search
                </span>
              </div>
            </div>
          </form>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navegacio"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            id="navegacio"
            class="collapse navbar-collapse justify-content-center"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/home" class="nav-link">
                  Home
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/users" class="nav-link">
                  Users
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/albums" class="nav-link">
                  Albums
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
        <div
          v-if="show"
          id="llista"
          class="animate__animated animate__slideInDown"
        >
          <p v-if="usuaris.length == 0" class="mt-3 text-center">
            No s'ha trobat usuaris
          </p>
          <ul v-else class="list-group text-left">
            <li
              v-for="usuari of usuaris"
              :key="usuari.id"
              class="list-group-item"
              @click="Consulta(usuari.id)"
            >
              {{ usuari.name | Majuscules }}
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Nuxt />
      </main>
    </div>
    <footer class="d-flex justify-content-between align-items-center">
      <div class="ml-3">
        Jordi Vidaña
      </div>
      <div class="mr-3">
        Projecte fi de curs Vue
      </div>
    </footer>
  </div>
</template>

<script src="~/scripts/default.js"></script>
