<template>
  <div>
    <HeaderApplication />
    <ContentApplication />
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import HeaderApplication from "../components/Application/Header/HeaderApplication";
import ContentApplication from "../components/Application/Content/ContentApplication";

export default {
  name:"Application",
  components: {
    HeaderApplication,
    ContentApplication,
  },
  created(){
    this.$store.dispatch("books/watchData", "Readed");
    this.$store.dispatch("books/watchData", "Reading");
    this.$store.dispatch("books/watchData", "WantRead");
  }
};
</script>