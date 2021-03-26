import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: '',
      showModal: false
    }
  },
  computed: {
    ...mapGetters(['GetUserByName'])
  },
  methods: {
    SearchUser () {
      const user = this.GetUserByName(this.search)

      if (this.search === '') {
        return
      }

      if (user === null) {
        this.showModal = true
        return
      }

      if (this.$route.name === 'UserDetails') {
        /*
          Si es selecciona un usuari amb el cercador i ja estem
          a la ruta de consulta de detalls d'usuari, per tal que
          Vue no doni problemes amb la ruta duplicada s'empra una
          ruta pont que ens reenviarà cap aquí.
        */
          if (this.$route.params.idUser !== user.id) {
            this.$store.commit('IncUserVisits', user.id)
            this.$router.push({
              name: 'ChangeUser',
              params: {
                idUser: user.id
              }
            })
          }
      } else {
        /*
          Selecció d'un usuari des de la llista d'usuaris o des del
          cercador en una ruta que no és la de consulta de detalls.
        */
          this.$store.commit('IncUserVisits', user.id)
          this.$router.push({
            name: 'UserDetails',
            params: {
              idUser: user.id
            }
          })
      }

    },
    Tancar () {
      this.showModal = false
    }
  }
}
