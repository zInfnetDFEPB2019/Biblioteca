<template>
  <v-dialog v-model="ModalInfoEditUI" persistent min-width="50%" max-width="100%">
    <v-card v-if="ModalInfoEditUI">
      <v-card-title class="headline px-4 py-3 cyan white--text">
        {{ModalInfoEditUI.volumeInfo.title}}
        <v-spacer></v-spacer>
        <v-icon @click="closeModalInfoEdit" color="white">mdi-close</v-icon>
      </v-card-title>
      <v-card-text class="px-3 pb-1 pt-3">
        <img class="mr-3 mb-3" align="left" :src="ModalInfoEditUI.volumeInfo.imageLinks.thumbnail" />
        <strong>Descrição:</strong>
        {{ModalInfoEditUI.volumeInfo.description.substring(0,300)+"..."}}
        <br />
        <strong>Autores:</strong>
        {{ModalInfoEditUI.volumeInfo.authors.join(", ")}}
        <br />
        <strong>Número de páginas:</strong>
        {{ModalInfoEditUI.volumeInfo.pageCount}}
        <br />
        <strong>Publicadora:</strong>
        {{ModalInfoEditUI.volumeInfo.publisher}}
        <br />
        <strong>Data de publicação:</strong>
        {{ModalInfoEditUI.volumeInfo.publishedDate}}
        <br />
        <v-btn
          color="green white--text"
          :href="ModalInfoEditUI.volumeInfo.infoLink"
          target="_blank"
          block
        >Mais informações</v-btn>
      </v-card-text>
      <v-card-actions style="display:flex;">
        <v-btn
          v-if="ModalInfoEditUI.collection != 'Readed'"
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="editBook('Readed', ModalInfoEditUI, ModalInfoEditUI.id) || closeModalInfoEdit();"
        >Já li</v-btn>
        <v-btn
          v-if="ModalInfoEditUI.collection != 'Reading'"
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="editBook('Reading', ModalInfoEditUI, ModalInfoEditUI.id) || closeModalInfoEdit();"
        >Estou Lendo</v-btn>
        <v-btn
          v-if="ModalInfoEditUI.collection != 'WantRead'"
          style="flex-grow:1;"
          color="cyan white--text"
          raised
          @click="editBook('WantRead', ModalInfoEditUI, ModalInfoEditUI.id) || closeModalInfoEdit();"
        >Quero Ler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ModalInfoEditBook",
  computed: {
    ModalInfoEditUI() {
      return this.$store.getters['ui/getBooksModalInfoEdit'];
    }
  },
  methods: {
    closeModalInfoEdit() {
      this.$store.commit("ui/wipeBooksModalInfoEdit");
    },
    editBook(collection, object, id) {
      this.$store.dispatch("books/deleteBook", {
        collection: this.ModalInfoEditUI.collection,
        id:id
      });
      this.$store.dispatch("books/addBook", {
        collection: collection,
        object
      });
    }
  }
};
</script>
<style scoped>
</style>