<template>
  <v-autocomplete
    v-model="model"
    :items="entries"
    :loading="isLoading"
    :search-input.sync="search"
    hide-details="true"
    color="white"
    hide-selected
    item-text="volumeInfo.title"
    item-value="volumeInfo.description"
    label="Public APIs"
    placeholder="Pesquise um livro"
    :hide-no-data="hideNoResults"
    return-object
    solo
  >
    <template slot="prepend-inner">
      <v-icon color="cyan" class="mr-2" @click="goToSearchPage">search</v-icon>
    </template>
  </v-autocomplete>
</template>
<script>
export default {
  name: "InputSearch",
  data() {
    return {
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
      hideNoResults: true
    };
  },
  watch: {
    search() {
      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          this.search +
          "&maxResults=40&printType=books&projection=full"
      )
        .then(res => res.json())
        .then(res => {
          if (this.$route.name == "search") {
            this.$store.commit("ui/getSearchData", this.entries);
          } else {
            this.entries = res.items;
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
    model() {
      this.$store.commit("ui/getSelectedSearchData", this.model);
    },
    $route(to, from) {
      console.log(from.name)//eslint-disable-line
      if(from.name == "search"){
        this.hideNoResults = false;
        console.log("from.name")//eslint-disable-line
      }
    }
  },
  methods: {
    goToSearchPage() {
      if (this.search != "" && this.search != null) {
        this.$router.push({ name: "search" });
        this.entries = [];
      }
    }
  }
};
</script>
<style scoped>
>>> .v-text-field__details {
  display: none !important;
}
</style>