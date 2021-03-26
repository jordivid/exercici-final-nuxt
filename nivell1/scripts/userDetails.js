import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      name: String,
      usuari: new Map()
    }
  },
  filters: {
    Majuscules (valor) {
      return valor.toUpperCase()
    }
  },
  computed: {
    ...mapGetters(['GetUser'])
  },
  created () {
    let usu = {}
    const user = this.GetUser(this.$route.params.idUser)

    if (user === undefined) {
      /*
        Si el getter no recupera les dades de l'usuari del store
        vol dir que han recarregat la pàgina i el store no està carregat.
        Es recupera les dades de sessionStorage.
      */

      this.$store.dispatch('RetrieveUsers')
      this.$store.dispatch('RetrieveAlbums')

      if (sessionStorage.getItem('usuari')) {
        try {
          usu = JSON.parse(sessionStorage.getItem('usuari'))
          this.name = usu.name
          this.usuari = new Map()
          this.usuari.set('E-mail', usu.email)
          this.usuari.set('Telèfon', usu.phone)
          this.usuari.set('Web', usu.website)
          this.usuari.set('Carrer', usu.street)
          this.usuari.set('Apartament', usu.suite)
          this.usuari.set('CP', usu.zipcode)
          this.usuari.set('Ciutat', usu.city)
        } catch (e) {
          sessionStorage.removeItem('usuari')
          this.$router.push('/users')
        }
      } else {
        this.$router.push('/users')
      }
    } else {
      /*
        Quan es recupera les dades de l'usuari del store es guarden
        a sessionStorage, per si de cas a algú se li acut recarregar la pàgina,
        el qual provacaria la pèrdua del store de la memòria.
      */
      this.name = user.name
      this.usuari = new Map()
      this.usuari.set('E-mail', user.email)
      this.usuari.set('Telèfon', user.phone)
      this.usuari.set('Web', user.website)
      this.usuari.set('Carrer', user.address.street)
      this.usuari.set('Apartament', user.address.suite)
      this.usuari.set('CP', user.address.zipcode)
      this.usuari.set('Ciutat', user.address.city)

      usu.name = user.name
      usu.email = user.email
      usu.phone = user.phone
      usu.website = user.website
      usu.street = user.address.street
      usu.suite = user.address.suite
      usu.zipcode = user.address.zipcode
      usu.city = user.address.city
      sessionStorage.setItem('usuari', JSON.stringify(usu))
    }
  }
}
