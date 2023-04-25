<template>
  <div class="toolbar">
    <v-app-bar dark color="indigo" clipped-left app>
    
      <v-img src="logo_archi_check.png" alt="logo_archi"></v-img>
      <v-toolbar-title @click="goHome" class="white--text"
        >Controle technique</v-toolbar-title
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  watch: {},
  name: "toolBar",
  //   components: {myContentDrawer},
  data: function () {
    return {};
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style>
.toolbar v-img {
  margin-left: 30%;
  width: 100px;
  height: 100px;
}
</style>