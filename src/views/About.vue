<template>
  <v-container class="d-flex align-center heightCompleteViewPortWithCalc72">
    <v-row class="d-flex justify-center">
      <v-col cols="4" class="d-flex flex-column justify-space-between">
        <div>
          <h1>BiblioTech</h1>
          <p>O aplicativo tem como objetivo auxiliar no gerenciamento de leitura de livors e afins. Para isso, o mesmo conta com a utlização da API de livros da Google, além de uma interface amigável e de fácil utilização.</p>
        </div>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto" id="img">
          <v-img
            class="white--text align-end"
            src="https://cutewallpaper.org/21/old-books-wallpapers/Old-Book-Wallpaper-55-images-.jpg"
          >
            <v-card-title>O jeito mais fácil de ler</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
#img {
  width: 500px;
}

.v-card__title {
  justify-content: center;
}
</style>