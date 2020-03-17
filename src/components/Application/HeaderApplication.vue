<template>
  <v-toolbar style="height:unset;" class="d-flex align-center" color="cyan">
    <!-- <v-text-field class hide-details label="Pesquisar" solo>
      <template slot="append">
        <v-icon color="cyan">search</v-icon>
      </template>
    </v-text-field> -->
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      hide-details="true"
      color="white"
      hide-no-data
      hide-selected
      item-text="Description"
      item-value="API"
      label="Public APIs"
      placeholder="Pesquise um livro"
      return-object
      clearable="true"
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
      search: null
    };
  },
  computed: {
    fields() {
      if (!this.model) return [];

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || "n/a"
        };
      });
    },
    items() {
      return this.entries.map(entry => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    }
  },
  watch: {
    search(val) { // eslint-disable-line
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.publicapis.org/entries")
        .then(res => res.json())
        .then(res => {
          const { count, entries } = res;
          this.count = count;
          this.entries = entries;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout", null, { root: true });
    }
  }
};
</script>
<style scoped>
.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none;
}
</style>