import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['GetAlbums', 'GetAlbum', 'GetVisitedAlbums', 'GetPhoto', 'GetUsers', 'GetUser', 'GetVisitedUsers'])
  },
  filters: {
    Majuscules (valor) {
      return valor.toUpperCase()
    }
  },
  created () {
    if (this.GetUsers.length === 0) {
      this.$store.dispatch('RetrieveUsers')
      this.$store.dispatch('RetrieveAlbums')
    }
  }
}
