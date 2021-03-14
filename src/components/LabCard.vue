<template>
  <v-card outlined>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <p class="pl-3 pt-1 mb-2 title">Лабораторная "{{ lab.name }}"</p>
        </v-col>
      </v-row>
      <v-row dense class="mt-5">
        <v-col cols="6">
          <Button color="#238636" text="Задание" icon="mdi-file-document" :url="lab.taskUrl"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <Button color="#e3b341" text="Исходники" icon="mdi-file-cog" :url="lab.sourceUrl"/>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="6">
          <Button color="#2b7489" text="Результат" icon="mdi-checkbox-marked" :url="lab.resultUrl"/>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'LabCard',

  components: {
    Button,
  },

  props: {
    lab: {
      name: String,
      taskUrl: String,
      resultUrl: String,
      sourceUrl: String,
    },
  },

  data: () => ({}),
};
</script>
