<template>
  <v-card shaped max-width="100%" min-height="350px">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{book.volumeInfo.title}}</v-list-item-title>
        <v-list-item-subtitle>{{book.volumeInfo.authors}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="py-0 pl-0">
      <p style="overflow: auto;" class="mb-0 pl-4">
        <img style="float:left;" class="mr-4 ml-n4" :src="book.volumeInfo.imageLinks.thumbnail" />
        {{book.volumeInfo.description.substring(0,350)+"..."}}
      </p>
    </v-card-text>
    <v-card-actions style="width">
      <v-btn icon @click="openBookInfoEdit()"> 
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="deleteBook(book.collection,book.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "CardContentApplication",
  props: ["book"],
  methods: {
    deleteBook(collection, id) {
      this.$store.dispatch("books/deleteBook", { collection:collection, id:id });
    },
    openBookInfoEdit(){
      this.$store.commit("ui/getBooksModalInfoEdit", this.book);
    }
  }
};
</script>
<style scoped>
>>> .v-card__actions {
  position: absolute;
  width: 100%;
  bottom: 0px;
}
</style>