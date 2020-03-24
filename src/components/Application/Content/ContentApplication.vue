<template>
  <div>
    <v-tabs
      background-color="cyan"
      color="white"
      slider-color="yellow"
      grow
      centered
    >
      <v-tab key="0" value="0" :to="tabs[0].route">{{ tabs[0].title }}</v-tab>
      <v-tab key="1" value="1" :to="tabs[1].route">{{ tabs[1].title }}</v-tab>
      <v-tab key="2" value="2" :to="tabs[2].route">{{ tabs[2].title }}</v-tab>
    </v-tabs>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "ContentApplication",
  data: () => ({
    tabs: [
      { title: "Já li", route: "readed" },
      { title: "Estou Lendo", route: "reading" },
      { title: "Quero Ler", route: "wantread" }
    ]
  }),
  methods: {

  },
  created() {
    this.$router.push("reading");
  }
};
</script>
<style scoped>
>>> div.v-slide-group__prev.v-slide-group__prev--disabled {
  display: none !important;
}
</style>