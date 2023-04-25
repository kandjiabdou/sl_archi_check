<template>
  <v-list>
    <v-list-item>
      <h3>Vérification de l'état des VIP</h3>
      <v-img src="vip.png" height="200" width="200"></v-img>
    </v-list-item>
    <v-list-item>
      Entrer l'adresse ip de la VIP :
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="vipIP" label="IP VIP" placeholder="IP VIP"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn color="primary" @click="checkVIPStatus">Vérifier</v-btn>
        </v-col>
      </v-row>
      <div>
        <p>liste des VIP</p>
        <v-data-table :headers="vipHeaders" :items="vipList"></v-data-table>
      </div>
      <div id="contentpoolmember"></div>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      vipIP: '',
      vipHeaders: [
        { text: 'Nom', value: 'name' },
        { text: 'Port', value: 'port' },
        { text: 'Status', value: 'status' },
        { text: '', value: '' },
      ],
      vipList: [],
    }
  },
  methods: {
    checkVIPStatus() {
      // You can implement the function to check VIP status here
    },
  },
}
</script>
