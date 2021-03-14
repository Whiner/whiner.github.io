<template>
  <v-container fluid>
    <v-row v-for="(item, index) in resultArray" :key="index" dense justify="center">
      <v-col cols="4">
        <v-card outlined>
          <v-container fluid>
            <v-row>
              <v-col>
                <p class="title mb-0">Request {{ index + 1 }}</p>
              </v-col>
            </v-row>
            <v-row class="text-center">
              <v-col>
                <v-text-field hide-details outlined readonly label="Url" :value="item.url"/>
              </v-col>
              <v-col>
                <v-text-field
                  hide-details outlined readonly label="Response" :value="item.response"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col class="text-center" cols="12" v-if="loading">
        Request {{ currentRequestIndex + 1 }}
        <v-progress-circular
          :size="25"
          color="blue-grey"
          indeterminate
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import fetch from 'node-fetch';

export default {
  name: 'PromiseArray',
  data: () => ({
    loading: false,
    values: [10, 20, 30],
    urls: [
      'https://kodaktor.ru/api/m/',
      'https://kodaktor.ru/api/MS2/',
      'https://kodaktor.ru/api/MS3/',
    ],
    resultArray: [],
    currentRequestIndex: 0,
  }),
  async mounted() {
    this.loading = true;
    try {
      let url = `${this.urls[0]}${this.values[0]}`;

      for (let i = 0; i < this.urls.length; i++) {
        this.currentRequestIndex = i;
        if (i > 0) {
          url = `${this.urls[i]}${this.values[i]}/${this.resultArray[i - 1].response}`;
        }
        // eslint-disable-next-line no-await-in-loop
        const response = await fetch(url)
          .then((x) => x.text())
          // eslint-disable-next-line no-loop-func
          .then((x) => parseInt(x.match(/(\d+)\w+/g)[0], 10));

        this.resultArray.push({
          url,
          response,
        });
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>

</style>
