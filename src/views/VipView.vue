<template>
  <v-container style="max-width: 90%; width: 90%">
    <v-sheet :elevation="12">
      <v-card>
        <v-sheet :elevation="6">
          <v-card-title class="headline text-center"
            ><span class="text-h5 bold-text"
              >Vérification de l'état des VIP</span
            ></v-card-title
          >
        </v-sheet>
        <v-list>
          <v-list-item>
            <v-img
              class="text-center mx-auto"
              src="vip.png"
              height="200"
              width="200"
            ></v-img>
          </v-list-item>
          <v-list-item>
            <p> Entrer l'adresse ip de la VIP :</p>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="vipIP"
                  label="IP VIP"
                  placeholder="IP VIP"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="text-center">
                <v-btn color="primary" @click="checkVIPStatus">Vérifier</v-btn>
              </v-col>
            </v-row>
            
          </v-list-item>
        </v-list>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      vipIP: "",
      vipHeaders: [
        { text: "Nom", value: "name" },
        { text: "Port", value: "port" },
        { text: "Status", value: "status" },
        { text: "", value: "" },
      ],
      vipList: [],
      cards: [
        {
          title: "Pre-fab homes",
          src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
          flex: 12,
        },
        {
          title: "Favorite road trips",
          src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
          flex: 6,
        },
        {
          title: "Best airlines",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 6,
        },
      ],
    };
  },
  methods: {
    checkVIPStatus() {
      // You can implement the function to check VIP status here
    },
  },
};
</script>
