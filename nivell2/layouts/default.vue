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
              <input v-model.trim="search" type="text" class="form-control" placeholder="Nom usuari">
              <div class="input-group-append">
                <span id="lupa" class="input-group-text material-icons" @click="SearchUser">
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
        <div v-if="showModal" class="dialog-background" @click.self="Tancar">
          <div class="dialog-foreground">
            <div class="modal-header">
              <h4 class="text-center text-danger w-100">
                Usuari inexistent
              </h4>
              <button type="button" @click="Tancar">
                &times;
              </button>
            </div>
          </div>
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

<script src="~/scripts/default.js">
</script>
