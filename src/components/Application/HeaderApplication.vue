<template>
  <v-toolbar style="height:unset;" class="d-flex align-center" color="cyan">
    <!-- <v-text-field class hide-details label="Pesquisar" solo>
      <template slot="append">
        <v-icon color="cyan">search</v-icon>
      </template>
    </v-text-field> -->
    <v-autocomplete
      v-model="model"
      :items="entries"
      :loading="isLoading"
      :search-input.sync="search"
      hide-details="true"
      color="white"
      hide-no-data
      hide-selected
      item-text="volumeInfo.title"
      item-value="volumeInfo.description"
      label="Public APIs"
      placeholder="Pesquise um livro"
      return-object
      solo
    >
      <template slot="prepend-inner">
        <v-icon color="cyan">search</v-icon>
      </template>
    </v-autocomplete>
    <v-expand-transition>
      <v-list v-if="model" class="red lighten-3">
        <v-list-item v-for="(field, i) in fields" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition>
    <!-- <v-btn :disabled="!model" color="grey darken-3" @click="model = null">
      Clear
      <v-icon right>mdi-close-circle</v-icon>
    </v-btn> -->
    <!-- <v-btn :to="{name:'configuration'}" color="white" class="ml-4 height-48px">
      <v-icon color="cyan">settings</v-icon>
    </v-btn> -->
    <v-btn class="ml-4 height-48px" color="white" @click="logout">
      <v-icon color="cyan">exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
export default {
  name: "HeaderApplication",
  data() {
    return {
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }},
    computed: {
    },
    watch: {
      search (val) { //eslint-disable-line

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        fetch('https://www.googleapis.com/books/v1/volumes?q='+this.search)
          .then(res => res.json())
          .then(res => {
            this.entries = res.items
            console.log(this.entries)//eslint-disable-line
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout", null, { root: true });
    }
  }
};
</script>
<style scoped>
>>>.v-text-field__details{
  display: none!important;
}
</style>