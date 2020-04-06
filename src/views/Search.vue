<template>
  <div class="ma-4">
    <v-card class="mb-4" v-for="(book, index) in SearchDataUI" :key="index">
      <v-card-title class="headline px-4 py-3 cyan white--text">{{book.volumeInfo.title}}</v-card-title>
      <v-card-text class="px-3 pb-1 pt-3">
        <img class="mr-3 mb-3" align="left" :src="book.volumeInfo.imageLinks.thumbnail" />
        <br />
        <strong>Descrição:</strong>
        {{book.volumeInfo.description}}
        <br />
        <strong>Autores:</strong>
        {{book.volumeInfo.authors}}
        <br />
        <strong>Número de páginas:</strong>
        {{book.volumeInfo.pageCount}}
        <br />
        <strong>Data de publicação:</strong>
        {{book.volumeInfo.publishedDate}}
        <br />
        <strong>Publicadora:</strong>
        {{book.volumeInfo.publisher}}
        <br />
        <v-btn
          color="green white--text"
          target="_blank"
          :href="book.volumeInfo.infoLink"
          block
        >Mais informações</v-btn>
      </v-card-text>
      <v-card-actions style="display:flex;">
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="saveBook('Readed',book)" >Já li</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="saveBook('Reading',book)" >Estou Lendo</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="saveBook('WantRead',book)" >Quero Ler</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Search",
  components: {},
  computed: {
    SearchDataUI() {
      return this.$store.getters["ui/getSearchData"];
    }
  },
  methods: {
    saveBook(collection, object) {
      this.$store.dispatch("books/addBook", { collection:collection, object:object });
    }
  }
};
</script>
<style scoped>
.defaultMargin {
  padding: 12px !important;
}
</style>