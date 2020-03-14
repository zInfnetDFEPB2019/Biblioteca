<template>
  <div>
    <HeaderApplication />
    <ContentApplication />
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderApplication from "../components/Application/HeaderApplication";
import ContentApplication from "../components/Application/ContentApplication";

export default {
  
  components: {
    HeaderApplication,
    ContentApplication,
  }
};
</script>