<template>
  <div >
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-divider dark v-if="item.divider" :key="item.icon"></v-divider>
        <v-list-item
          ripple
          :to="item.action"
          :key="i"
          :prepend-icon="'mdi-' + item.icon"
          :title="item.text"
          v-else
        >
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "drawerMenu",
  data: function () {
    return {
      items: [
        { icon: "sitemap", text: "Flux", action: "/" },
        { icon: "ip-network", text: "Etat VIP", action: "/vip" },
        { icon: "wall-fire", text: "Firewall", action: "/firewall" },
        { icon: "server", text: "Conf VRA", action: "/vra" },
      ],
    };
  },
};
</script>