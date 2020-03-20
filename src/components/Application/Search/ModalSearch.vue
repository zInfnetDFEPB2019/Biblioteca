<template>
  <v-dialog v-model="ModalSearchUI" persistent max-width="25%">
    <v-card>
      <v-card-title class="headline px-4 py-3 cyan white--text">
        Adicionar Livro
        <v-spacer></v-spacer>
        <v-icon @click="closeModalSearch" color="white">mdi-close</v-icon>
      </v-card-title>

      <v-card-text v-if="ModalSearchUI" class="px-3 pb-1 pt-3">
        <img class="mr-3 mb-3" align="left" :src="ModalSearchUI.volumeInfo.imageLinks.thumbnail" />
        <strong>Titulo:</strong>
        {{ModalSearchUI.volumeInfo.title}}
        <br />
        <strong>Descrição:</strong>
        {{ModalSearchUI.volumeInfo.description}}
        <br />
        <strong>Autores:</strong>
        {{ModalSearchUI.volumeInfo.authors.join(", ")}}
        <br />
        <strong>Número de páginas:</strong>
        {{ModalSearchUI.volumeInfo.pageCount}}
        <br />
        <strong>Data de publicação:</strong>
        {{ModalSearchUI.volumeInfo.publishedDate}}
        <br />
        <v-btn
          color="green white--text"
          :href="ModalSearchUI.volumeInfo.infoLink"
          target="_blank"
          block
        >Mais informações</v-btn>
      </v-card-text>
      <v-card-actions style="display:flex;">
        <v-btn style="flex-grow:2;" color="cyan white--text" raised @click="dialog = false">Já li</v-btn>
        <v-btn
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="dialog = false"
        >Estou Lendo</v-btn>
        <v-btn
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="dialog = false"
        >Quero Ler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ModalSearch",
  data() {
    return {};
  },
  computed: {
    ModalSearchUI() {
      return this.$store.state.ui.search.data;
    },
  },
  watch: {},
  methods: {
    closeModalSearch() {
      this.$store.commit("ui/wipeSearchData");
    },
  }
};
</script>
<style scoped>
</style>