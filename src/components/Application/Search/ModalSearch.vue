<template>
  <v-dialog v-model="ModalSearchUI"  max-width="25%">
    <v-card>
      <v-card-title class="headline px-4 py-3 cyan white--text">Adicionar Livro<v-spacer></v-spacer><v-icon @click="closeModalSearch" color="white">mdi-close</v-icon></v-card-title>

      <v-card-text class="px-3 pb-1 pt-3">
        <img align="left" :src="ModalSearchUI.volumeInfo.imageLinks.thumbnail">
        Titulo: {{ModalSearchUI.volumeInfo.title}}<br>
        Descrição: {{ModalSearchUI.volumeInfo.description}}<br>
        Autores: {{ModalSearchUI.volumeInfo.authors}}<br>
        Número de páginas: {{ModalSearchUI.volumeInfo.pageCount}}<br>
        Data de publicação: {{ModalSearchUI.volumeInfo.publishedDate}}<br>
        Mais informações: {{ModalSearchUI.volumeInfo.infoLink}}<br>
        </v-card-text>
      <v-card-actions style="display:flex;">
        <v-btn style="flex-grow:2;" color="cyan white--text" raised @click="dialog = false">Já li</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="dialog = false">Estou Lendo</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="dialog = false">Quero Ler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ModalSearch",
  data() {
    return {
        dialog: true,
    };
  },
  computed: {
    ModalSearchUI(){
        return this.$store.state.ui.search.data
    }
  },
  watch: {},
  methods: {
      closeModalSearch(){
        this.$store.commit("ui/wipeSearchData"); 
      }
  }
};
</script>
<style scoped>
</style>