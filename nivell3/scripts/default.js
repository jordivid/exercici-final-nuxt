import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: '',
      usuaris: [],
      show: false
    }
  },
  filters: {
    Majuscules (valor) {
      return valor.toUpperCase()
    }
  },
  computed: {
    ...mapGetters(['GetUserByName', 'GetUsers'])
  },
  methods: {
    ListUsers () {
      /*
        Quan es tecleja a l'input de cerca d'usuaris
        s'obre una llista amb els noms d'usuari que
        comencin pels caràcters entrats.
      */
      const users = this.GetUsers
      let nom
      const inicial = this.search.toUpperCase()
      this.usuaris = []

      if (this.search === '') {
        this.usuaris = []
        this.show = false
        return
      }

      for (const user of users) {
        nom = user.name.toUpperCase()
        if (nom.startsWith(inicial)) {
          this.usuaris.push(user)
        }
      }
      this.show = true
    },
    ClearSearch () {
      this.search = ''
      this.usuaris = []
      this.show = false
    },
    Consulta (id) {
      // Consulta d'usuari
      this.ClearSearch()
      if (this.$route.name === 'UserDetails') {
        /*
          Si es selecciona un usuari amb el cercador i ja estem
          a la ruta de consulta de detalls d'usuari, per tal que
          Vue no doni problemes amb la ruta duplicada s'empra una
          ruta pont que ens reenviarà cap aquí.
          */
        if (this.$route.params.idUser !== id) {
          this.$store.commit('IncUserVisits', id)
          this.$router.push({
            name: 'ChangeUser',
            params: {
              idUser: id
            }
          })
        }
      } else {
        /*
          Selecció d'un usuari des de la llista d'usuaris o des del
          cercador en una ruta que no és la de consulta de detalls.
        */
        this.$store.commit('IncUserVisits', id)
        this.$router.push({
          name: 'UserDetails',
          params: {
            idUser: id
          }
        })
      }
    }
  }
}
