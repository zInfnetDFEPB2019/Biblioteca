<template>
  <v-row class="px-3">
    <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="(book,index) in getReadBook" :key="index">
      <CardContentApplication :book="book"/>
    </v-col>
  </v-row>
</template>
<script>
import CardContentApplication from "../components/Application/Content/CardContentApplication";
export default {
  components:{
    CardContentApplication
  },
  computed:{
    getReadBook(){
      return this.$store.state.books.WantReadBook;
    }
  },
  created() {
  }
}
</script>
<style scoped>
</style>