<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="4" xl="3">
      <CardContentApplication />
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="4" xl="3">
      <CardContentApplication />
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="4" xl="3">
      <CardContentApplication />
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="4" xl="3">
      <CardContentApplication />
    </v-col>
  </v-row>
</template>
<script>
import CardContentApplication from "../components/Application/Content/CardContentApplication";
export default {
  components: {
    CardContentApplication
  },
    created() {
    console.log(this.$route.name + ' teste') //eslint-disable-line
    this.$store.dispatch("books/getBookData", this.$route.name);
  }
};
</script>