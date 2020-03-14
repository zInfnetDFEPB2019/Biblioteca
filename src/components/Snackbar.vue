<template>
    <v-snackbar :top="true" v-model="snackbar">
      {{ text }}
    </v-snackbar>
</template>
<script>
export default {
  name: "Snackbar",
  data: () => ({
    snackbar: true,
    text: "Hello, I'm a snackbar"
  }),
  methods: {
  },
  created() {}
};
</script>