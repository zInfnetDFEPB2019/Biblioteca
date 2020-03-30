<template>
  <div class="ma-4">
    <v-card class="mb-4">
      <v-card-title class="headline px-4 py-3 cyan white--text">Titulo do livro</v-card-title>
      <v-card-text class="px-3 pb-1 pt-3">
        <img
          class="mr-3 mb-3"
          align="left"
          src="http://books.google.com/books/content?id=aDNQAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        />
        <br />
        <strong>Descrição:</strong>
        <!-- {{ModalSearchUI.volumeInfo.description}} -->
        <br />
        <strong>Autores:</strong>
        <!-- {{ModalSearchUI.volumeInfo.authors.join(", ")}} -->
        <br />
        <strong>Número de páginas:</strong>
        <!-- {{ModalSearchUI.volumeInfo.pageCount}} -->
        <br />
        <strong>Data de publicação:</strong>
        <!-- {{ModalSearchUI.volumeInfo.publishedDate}} -->
        <br />
        <v-btn color="green white--text" target="_blank" block>Mais informações</v-btn>
      </v-card-text>
      <v-card-actions style="display:flex;">
        <v-btn style="flex-grow:1;" color="cyan white--text" raised>Já li</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised>Estou Lendo</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised>Quero Ler</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Search",
  components: {},
};
</script>
<style scoped>
.defaultMargin{
  padding: 12px!important;
}
</style>