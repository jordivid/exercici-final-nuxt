import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      photos: []
    }
  },
  computed: {
    ...mapGetters(['GetAlbum', 'GetPhotos'])
  },
  created () {
    /*
      Si el getter recupera les dades de l'album del store, es guarden
      a sessionStorage. Si això no fos possible vol dir que han recarregat
      la pàgina i el store no està carregat, per tant es recupera les dades de sessionStorage.
    */
    try {
      this.photos = this.GetPhotos(this.$route.params.idAlbum)
      sessionStorage.setItem('fotos', JSON.stringify(this.photos))
    } catch (exc) {
      this.$store.dispatch('RetrieveUsers')
      this.$store.dispatch('RetrieveAlbums')

      if (sessionStorage.getItem('fotos')) {
        try {
          this.photos = JSON.parse(sessionStorage.getItem('fotos'))
        } catch (e) {
          sessionStorage.removeItem('fotos')
          this.$router.push('/albums')
        }
      } else {
        this.$router.push('/albums')
      }
    }
  }
}
