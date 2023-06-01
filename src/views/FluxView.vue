<template>
  <v-container class="text-center" style="max-width: 90%; width: 90%">
    <v-sheet :elevation="12">
      <v-card>
        <v-sheet :elevation="6">
          <v-card-title class="headline text-center"
            ><span class="text-h5 bold-text">TEST DE FLUX</span></v-card-title
          >
        </v-sheet>

        <v-row justify="center" class="pa-5">
          <v-col cols="12" md="6">
            <v-card class="">
              <v-img
                class="text-center mx-auto"
                src="unit_testing_low.png"
                height="200"
                width="200"
              ></v-img>
              <v-card-title
                ><span class="text-h5">Test unitaire</span></v-card-title
              >
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="sourceIP"
                    label="Source IP"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="destinationIP"
                    label="Destination IP"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="port"
                    label="Port"
                    type="number"
                    min="0"
                    max="65535"
                    required
                  ></v-text-field>
                  <v-btn
                    @click="runUnitTest"
                    color="primary"
                    :disabled="!valid"
                  >
                    Lancer le test
                  </v-btn>
                </v-form>
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
              <v-img
                class="text-center mx-auto"
                src="multi_test_low.png"
                height="200"
                width="200"
              ></v-img>
              <v-card-title
                ><span class="text-h5">Multi teste</span></v-card-title
              >
              <v-card-text>
                <v-form v-model="valid" @submit.prevent="runMultiTest">
                  <v-file-input
                    v-model="multiTestFile"
                    label="Choisir un fichier"
                    required
                  ></v-file-input>
                  <v-btn type="submit" color="primary" :disabled="!valid">
                    Lancer
                  </v-btn>
                </v-form>
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
      valid: false,
      sourceIP: "",
      destinationIP: "",
      port: null,
      unitTestResults: [],
      showResults: false,
      multiTestFile: null,
      headers: [
        { text: "Source", value: "source" },
        { text: "Destination", value: "destination" },
        { text: "Port", value: "port" },
        { text: "Status", value: "status" },
        { text: "Description", value: "description" },
      ],
    };
  },
  methods: {
    runUnitTest() {
      // perform the unit test and update the results table
      this.unitTestResults = [
        {
          source: this.sourceIP,
          destination: this.destinationIP,
          port: this.port,
          status: "Success",
          description: "",
        },
      ];
      this.showResults = true;
    },
    runMultiTest() {
      // perform the multi test
    },
  },
};
</script>