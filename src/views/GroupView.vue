<template>
  <v-container class="text-center" style="max-width: 90%; width: 90%">
    <v-sheet :elevation="12">
      <v-card>
        <v-sheet :elevation="6">
          <v-card-title class="headline text-center"
            ><span class="text-h5 bold-text">GROUP FIREWALL</span></v-card-title
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
                ><span class="text-h5">Contenu du groupe</span></v-card-title
              >
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="groupName"
                    label="Nom du groupe"
                    required
                  ></v-text-field>
                  <v-btn
                    @click="runUnitTest"
                    color="primary"
                    :disabled="!valid"
                  >
                    Chercher
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
                ><span class="text-h5">Où se trouve le groupe ?</span></v-card-title
              >
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="elementName"
                    label="Nom du groupe ou host"
                    required
                  ></v-text-field>
                  <v-btn
                    @click="runUnitTest"
                    color="primary"
                    :disabled="!valid"
                  >
                    Chercher
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
    };
  },
  methods: {
  },
};
</script>