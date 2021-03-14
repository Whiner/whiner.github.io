<template>
  <v-container fluid>
    <template v-for="(proto, index) in prototypeChain" >
      <v-row :key="index" dense>
        <v-col class="text-center">
          {{ proto }}
        </v-col>
      </v-row>
      <v-row v-if="index !== prototypeChain.length - 1" :key="'qwe' + index" dense>
        <v-col class="text-center">
          <v-icon>mdi-chevron-down</v-icon>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { o3 } from 'goss_proto';

export default {
  name: 'PrototypeChainComponent',
  data: () => ({
    prototypeChain: [],
  }),
  created() {
    this.prototypeChain.push(o3.name);
    let proto = Object.getPrototypeOf(o3);
    while (proto) {
      this.prototypeChain.push(proto.name);
      proto = Object.getPrototypeOf(proto);
    }

    this.prototypeChain.reverse();
  },
};
</script>

<style scoped>

</style>
