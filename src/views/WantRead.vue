<template>
  <v-card shaped max-width="344">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">Nome do livro</v-list-item-title>
        <v-list-item-subtitle>Autor</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
    <v-card-text>Descrição.</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>