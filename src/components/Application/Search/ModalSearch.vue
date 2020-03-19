<template>
  <v-dialog v-model="ModalSearchUI"  max-width="25%">
    <v-card>
      <v-card-title class="headline px-4 py-3 cyan white--text">Adicionar Livro<v-spacer></v-spacer><v-icon @click="closeModalSearch" color="white">mdi-close</v-icon></v-card-title>

      <v-card-text class="pb-2 pt-4">{{ModalSearchUI}}</v-card-text>

      <v-card-actions style="display:flex;">
        <v-btn style="flex-grow:2;" color="cyan white--text" raised @click="dialog = false">Já li</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="dialog = false">Estou Lendo</v-btn>
        <v-btn style="flex-grow:1;" color="cyan white--text" raised @click="dialog = false">Quero Ler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "ModalSearch",
  data() {
    return {
        dialog: true,
    };
  },
  computed: {
    ModalSearchUI(){
        return this.$store.state.ui.search.data
    }
  },
  watch: {},
  methods: {
      closeModalSearch(){
        this.$store.commit("ui/wipeSearchData"); 
      }
  }
};
</script>
<style scoped>
</style>