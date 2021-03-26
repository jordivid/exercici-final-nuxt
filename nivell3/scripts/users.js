import { mapGetters } from 'vuex'

export default {
  name: 'users',
  computed: {
    ...mapGetters(['GetUsers', 'GetUser', 'GetVisitedUsers'])
  },
  methods: {
    Consulta (id) {
      this.$store.commit('IncUserVisits', id)
      this.$router.push({
        name: 'UserDetails',
        params: {
          idUser: id
        }
      })
    }
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
