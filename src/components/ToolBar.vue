<template>
  <v-app-bar dark color="indigo" clipped-left app>
    <div class="d-flex align-center">
      <v-img
        height="50"
        src="logo_archi_check.png"
        alt="logo_archi"
      ></v-img>
      <v-toolbar-title @click="goHome"
        >Outil de controle technique</v-toolbar-title
      >
    </div>
  </v-app-bar>
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
.v-toolbar-title__placeholder{
  white-space: nowrap;
  overflow: visible;
}
</style>