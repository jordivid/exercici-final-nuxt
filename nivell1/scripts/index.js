export default {
  beforeCreate () {
    this.$store.dispatch('RetrieveUsers')
    this.$store.dispatch('RetrieveAlbums')
  },
  mounted () {
    this.$router.push('/Home')
  }
}
