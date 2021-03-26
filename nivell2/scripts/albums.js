import { mapGetters } from 'vuex';

export default {
  name: 'albums',
  computed: {
    ...mapGetters(['GetAlbums', 'GetAlbum', 'GetVisitedAlbums','GetUsers'])
  },
  methods: {
    Consulta (id) {
      this.$store.commit('IncAlbumVisits', id)
      this.$router.push({
        name: 'AlbumDetails',
        params: {
          idAlbum: id
        }
      })
    }
  },
  created () {
    if (this.GetUsers.length === 0) {
      this.$store.dispatch('RetrieveUsers')
      this.$store.dispatch('RetrieveAlbums')
    }
  }
}
