export const state = () => ({
  users: new Map(),
  albums: new Map(),
  photos: new Map(),
  canviUser: false,
  canviAlbum: false
})

export const getters = {
  GetUsers (state) {
    const usuaris = []
    for (const usuari of state.users.values()) {
      usuaris.push(usuari)
    }
    return usuaris
  },
  GetUser (state) {
    return function (id) {
      return state.users.get(id)
    }
  },
  GetVisitedUsers (state) {
    const usuaris = []

    if (state.canviUser) {
      for (const usuari of state.users.values()) {
        if (usuari.visits > 0) {
          usuaris.push(usuari)
        }
      }
      state.canviUser = false
    }
    return usuaris
  },
  GetAlbums (state) {
    const coleccio = []
    let album
    let photo

    for (const [key, value] of state.albums) {
      photo = state.photos.get(value.photos[0])
      album = {}
      album.id = key
      album.title = photo.title
      album.visits = value.visits
      coleccio.push(album)
    }

    return coleccio
  },
  GetAlbum (state) {
    return function (id) {
      return state.albums.get(id)
    }
  },
  GetVisitedAlbums (state) {
    const coleccio = []
    let album
    let photo

    if (state.canviAlbum) {
      for (const [key, value] of state.albums) {
        if (value.visits > 0) {
          photo = state.photos.get(value.photos[0])
          album = {}
          album.id = key
          album.title = photo.title
          album.visits = value.visits
          coleccio.push(album)
        }
      }
      state.canviAlbum = false
    }

    return coleccio
  },
  GetPhotos (state) {
    return function (idAlbum) {
      const arrPhotos = []
      const idsPhotos = state.albums.get(idAlbum).photos

      for (const idPhoto of idsPhotos) {
        arrPhotos.push(state.photos.get(idPhoto))
      }

      return arrPhotos
    }
  },
  GetPhoto (state) {
    return function (id) {
      return state.photos.get(id)
    }
  }
}

export const mutations = {
  SetUsers (state, mapUsers) {
    state.users = mapUsers
  },
  SetAlbums (state, mapAlbums) {
    state.albums = mapAlbums
  },
  SetPhotos (state, mapPhotos) {
    state.photos = mapPhotos
  },
  IncUserVisits (state, id) {
    const user = this.getters.GetUser(id)
    user.visits++
    state.canviUser = true
  },
  IncAlbumVisits (state, id) {
    const album = this.getters.GetAlbum(id)
    album.visits++
    state.canviAlbum = true
  }
}

export const actions = {
  // Obtenció de la llista d'usuaris
  RetrieveUsers (context) {
    this.$axios
      .get('/users')
      .then((response) => {
        const userMap = new Map()
        for (const user of response.data) {
          user.visits = 0
          userMap.set(user.id, user)
        }
        context.commit('SetUsers', userMap)
      })
      .catch((error) => {
        context.commit('SetUsers', new Map())
        console.log(error)
      })
  },
  // Obtenció de la llista d'albums
  RetrieveAlbums (context) {
    this.$axios
      .get('/photos')
      .then((response) => {
        const albumMap = new Map()
        const photoMap = new Map()
        for (const photo of response.data) {
          photoMap.set(photo.id, photo)
          if (albumMap.has(photo.albumId)) {
            const album = albumMap.get(photo.albumId)
            const arrPhotos = album.photos
            arrPhotos.push(photo.id)
            albumMap.set(photo.albumId, { visits: 0, photos: arrPhotos })
          } else {
            albumMap.set(photo.albumId, { visits: 0, photos: [photo.id] })
          }
        }
        context.commit('SetAlbums', albumMap)
        context.commit('SetPhotos', photoMap)
      })
      .catch((error) => {
        context.commit('SetAlbums', new Map())
        context.commit('SetPhotos', new Map())
        console.log(error)
      })
  }
}
