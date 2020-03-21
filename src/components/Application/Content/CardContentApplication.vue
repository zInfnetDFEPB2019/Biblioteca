<template>
  <v-card shaped max-width="344">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">Titulo</v-list-item-title>
        <v-list-item-subtitle>Autor</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text class="py-0">
      <p style="overflow: auto;" class="mb-0">
        <img
          style="float:left;"
          class="mr-4"
          src="https://books.google.com/books/content?id=4DaHyIC3DeEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        />
        Descrição
      </p>
    </v-card-text>
    <v-card-actions style="width">
      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

export default {
  name: "CardContentApplication",
};
</script>