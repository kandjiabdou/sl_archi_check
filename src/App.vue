<template>
  <v-card>
    <v-layout>
      <toolBar />

      <v-navigation-drawer class="bg-indigo" theme="dark" permanent>
        <myContentDrawer />
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block> Button </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main>
        <v-slide-y-transition mode="out-in">
          <router-view />
        </v-slide-y-transition>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import toolBar from "@/components/ToolBar";
import myContentDrawer from "@/components/Drawer"
export default {
  name: "app",
  components: { toolBar, myContentDrawer },
};
</script>