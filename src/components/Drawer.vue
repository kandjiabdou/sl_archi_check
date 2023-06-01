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
        { icon: "home", text: "Acceuil", action: "/" },
        { icon: "sitemap", text: "Flux Zabbix", action: "/flux" },
        { icon: "ip-network", text: "Etat VIP", action: "/vip" },
        { icon: "wall-fire", text: "Group Firewall", action: "/group" },
        { icon: "server", text: "Conf VM VRA", action: "/confvm" },
      ],
    };
  },
};
</script>