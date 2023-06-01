<template>
  <v-container class="text-center" style="max-width: 90%; width: 90%">
    <v-sheet :elevation="12">
      <v-card class="mx-auto">
        <v-container fluid>
          <v-row dense>
            <v-col cols="12 pa-10">
              <v-card>
                <v-img
                  src="unit_testing_low.png"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100px"
                  cover
                >
                  <v-card-title class="text-white">Unit test Flux</v-card-title>
                </v-img>

                <v-card-text>
                  <v-form v-model="valid">
                    <v-row>
                      <v-col cols="3">
                        <v-text-field
                          v-model="sourceIP"
                          label="Source IP"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3">
                        <v-text-field
                          v-model="destinationIP"
                          label="Destination IP"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="2">
                        <v-text-field
                          v-model="port"
                          label="Port"
                          type="number"
                          min="0"
                          max="65535"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4">
                        <v-btn
                          @click="runUnitTest"
                          color="primary"
                          :disabled="!valid"
                          >Lancer le test</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6 pl-10 pb-10 pr-5">
              <v-card>
                <v-img
                  src="multi_test_low.png"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100px"
                  cover
                >
                  <v-card-title class="text-white"
                    >Multi test flux
                  </v-card-title>
                </v-img>
                <v-card-text>
                  <v-form v-model="valid" @submit.prevent="runMultiTest">
                    <div class="d-flex align-center justify-center">
                      <v-file-input
                        v-model="multiTestFile"
                        label="Choisir un fichier"
                        required
                      ></v-file-input>
                      <v-btn type="submit" color="primary" :disabled="!valid">
                        Lancer
                      </v-btn>
                    </div>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6 pr-10 pb-10 pl-5">
              <v-card>
                <v-img
                  src="vip.png"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100px"
                  cover
                >
                  <v-card-title class="text-white">VIP</v-card-title>
                </v-img>
                <v-list-item>
                  <p>Entrer l'adresse ip de la VIP :</p>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="vipIP"
                        label="IP VIP"
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
              </v-card>
            </v-col>
            <v-col cols="6 pl-10 pb-10 pr-5">
              <v-card>
                <v-img
                  src="vm.png"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100px"
                  cover
                >
                  <v-card-title class="text-white"
                    >Configuration de VM VRA</v-card-title
                  >
                </v-img>
                <v-list-item>
                  <p>Entrer l'id du déploiement :</p>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="vipIP"
                        label="IP VIP"
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
              </v-card>
            </v-col>
            <v-col cols="6 pr-10 pb-10 pl-5">
              <v-card>
                <v-img
                  src="firewall.png"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="100px"
                  cover
                >
                  <v-card-title class="text-white">Group Firewall</v-card-title>
                </v-img>
                <v-list-item>
                  <p>Entrer le nom du group :</p>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="vipIP"
                        label="IP VIP"
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
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Test de flux",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "VIP",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Grou",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
      {
        title: "Conf VM",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
  }),
};
</script>