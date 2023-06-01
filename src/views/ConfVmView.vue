<template>
  <v-container class="text-center" style="max-width: 90%; width: 90%">
    <v-sheet :elevation="12">
      <v-card>
        <v-sheet :elevation="6">
          <v-card-title class="headline text-center"
            ><span class="text-h5 bold-text">Configuration VM VRA</span></v-card-title
          >
        </v-sheet>

        <v-row justify="center" class="pa-5">
          <v-col cols="12" md="6">
            <v-card class="">
              <v-img
                class="text-center mx-auto"
                src="vip.png"
                height="200"
                width="200"
              ></v-img>
              <v-card-title
                ><span class="text-h5">Deploiement</span></v-card-title
              >
              <v-card-text>
                <v-list-item>
                  Entrer l'ID du déploiement:
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="vipIP"
                        label="id déploiement"
                        placeholder="IP VIP"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" class="text-center">
                      <v-btn color="primary" @click="checkVIPStatus"
                        >Vérifier</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-list-item>
              </v-card-text>
              <v-card-text>
                <v-data-table
                  v-if="showResults"
                  :headers="headers"
                  :items="unitTestResults"
                  hide-default-footer
                  class="elevation-1"
                ></v-data-table>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="">
              <v-card-title
                ><span class="text-h5">Info déploiement</span></v-card-title
              >
              <v-card-text>
                <v-textarea
                  bg-color="light-blue"
                  color="black"
                  label="Label"
                ></v-textarea>

                <v-textarea
                  bg-color="grey-lighten-2"
                  color="cyan"
                  label="Label"
                ></v-textarea>

                <v-textarea
                  bg-color="amber-lighten-4"
                  color="orange orange-darken-4"
                  label="Label"
                ></v-textarea>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
