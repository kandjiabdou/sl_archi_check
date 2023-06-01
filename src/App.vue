<template>
  <v-layout>
    <toolBar />

    <v-navigation-drawer class="bg-indigo" theme="dark" permanent>
      <myContentDrawer />
    </v-navigation-drawer>

    <v-main class="main-container">
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
  </v-layout>
</template>

<script>
import toolBar from "@/components/ToolBar";
import myContentDrawer from "@/components/Drawer";
export default {
  name: "app",
  components: { toolBar, myContentDrawer },
};
</script>

<style>
.main-container {
  background-color: #e6edf1;
  min-height: 100vh;
}
</style>