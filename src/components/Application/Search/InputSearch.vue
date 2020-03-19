<template>
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
      :clearable="true"
      return-object
      solo
    >
      <template slot="prepend-inner">
        <v-icon color="cyan">search</v-icon>
      </template>
    </v-autocomplete>
    <!-- <v-expand-transition>
      <v-list v-if="model" class="red lighten-3">
        <v-list-item v-for="(field, i) in fields" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="field.value"></v-list-item-title>
            <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expand-transition> -->
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
      fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a',
        }
      })
      }
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
  }
};
</script>
<style scoped>
>>> .v-text-field__details {
  display: none !important;
}
</style>