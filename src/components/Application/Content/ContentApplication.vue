<template>
  <div>
    <v-tabs
      v-model="tabs"
      background-color="cyan"
      color="white"
      slider-color="yellow"
      grow
      centered
    >
      <v-tab
        v-for="(titulo, index) in titulos"
        :key="index"
        :value="index"
        @click="changeRoute(index)"
      >{{ titulo }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <portal-target
          v-if="this.$route.name == 'read' || this.$route.name == 'configuration'"
          style="background:#E0F7FA;"
          class="py-2 px-4"
          name="destination"
        ></portal-target>
        <!-- {{ this.$route.name }} -->
        <!-- <Read /> -->
      </v-tab-item>
      <v-tab-item>
        <portal-target
          v-if="this.$route.name == 'reading' || this.$route.name == 'configuration'"
          style="background:#E0F7FA;"
          class="py-2 px-4"
          name="destination"
        ></portal-target>
        <!-- {{ this.$route.name }} -->
        <!-- <WantRead /> -->
      </v-tab-item>
      <v-tab-item>
        <portal-target
          v-if="this.$route.name == 'wantread' || this.$route.name == 'configuration'"
          style="background:#E0F7FA;"
          class="py-2 px-4"
          name="destination"
        ></portal-target>
        <!-- {{ this.$route.name }} -->
        <!-- <Reading /> -->
      </v-tab-item>
    </v-tabs-items>
    <portal to="destination">
      <router-view></router-view>
    </portal>
  </div>
</template>
<script>
// import Read from "../../views/Read";
// import WantRead from "../../views/WantRead";
// import Reading from "../../views/Reading";

export default {
  name: "ContentApplication",
  data: () => ({
    tabs: 1,
    titulos: ["Já li", "Estou Lendo", "Quero Ler"]
  }),
  // components: {
  //   Read,
  //   WantRead,
  //   Reading
  // },
  methods: {
    changeRoute(index) {
      switch (index) {
        case 0:
          this.$router.push({ name: "read" });
          break;
        case 1:
          this.$router.push("reading");
          break;
        case 2:
          this.$router.push("wantread");
          break;
      }
    }
  },
  created() {
    this.$router.push("reading");
  }
};
</script>