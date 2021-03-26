/*
  Aquesta és una ruta pont per poder canviar l'usuari del
  qual es consulta els detalls a userDetails quan es selecciona
  un usuari al cercador des de la mateixa ruta sense que View es
  queixi de duplicitat en la ruta.
*/
export default {
  created () {
    this.$router.push(
      {
        name: 'UserDetails',
        params: {
          idUser: this.$route.params.idUser
        }
      })
  }
}
