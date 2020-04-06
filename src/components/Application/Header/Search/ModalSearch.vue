<template>
  <v-dialog v-model="ModalSearchUI" persistent min-width="50%" max-width="100%">
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
        {{ModalSearchUI.volumeInfo.description.substring(0,300)+"..."}}
        <br />
        <strong>Autores:</strong>
        {{ModalSearchUI.volumeInfo.authors.join(", ")}}
        <br />
        <strong>Número de páginas:</strong>
        {{ModalSearchUI.volumeInfo.pageCount}}
        <br />
        <strong>Publicadora:</strong>
        {{ModalSearchUI.volumeInfo.publisher}}
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
        <v-btn
          style="flex-grow:2;"
          color="cyan white--text"
          raised
          @click="saveBook('Readed', ModalSearchUI) || closeModalSearch();"
        >Já li</v-btn>
        <v-btn
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="saveBook('Reading', ModalSearchUI) || closeModalSearch();"
        >Estou Lendo</v-btn>
        <v-btn
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="saveBook('WantRead', ModalSearchUI) || closeModalSearch();"
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
      return this.$store.getters["ui/getSearchSelected"];
    }
  },
  methods: {
    closeModalSearch() {
      this.$store.commit("ui/wipeModalSelectedSearchData");
    },
    saveBook(collection, object) {
      this.$store.dispatch("books/addBook", {
        collection: collection,
        object: object
      });
    }
  }
};
</script>
<style scoped>
</style>