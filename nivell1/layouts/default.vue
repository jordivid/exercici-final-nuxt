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
                <NuxtLink to="/Home" class="nav-link">
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
