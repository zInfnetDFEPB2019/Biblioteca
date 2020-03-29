<template>
    <v-snackbar :top="snackbarUI.top" :timeout="snackbarUI.timeout" :color="snackbarUI.color" v-model="snackbarUI.open">
      {{ snackbarUI.text }}
    </v-snackbar>
</template>
<script>
export default {
  name: "Snackbar",
  computed: {
      snackbarUI(){
          return this.$store.state.ui.generic.snackbar;
      }
  },
  methods: {
  },
  created() {}
};
</script>