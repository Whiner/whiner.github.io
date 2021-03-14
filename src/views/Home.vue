<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="lab in labs" :key="lab.name" cols="3">
        <LabCard :lab="lab"></LabCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LabCard from '@/components/LabCard.vue';
import { getRootPath } from '@/utils/env-util';

export default {
  name: 'Home',

  components: {
    LabCard,
  },

  data: () => ({
    labs: [
      {
        name: 'Введение в XSLT, XPath. Задание 1',
        taskUrl: 'http://kodaktor.ru/sigma.pdf',
        resultUrl: `${getRootPath()}/labs/xsl/task1/result.xml`,
        sourceUrl: `${getRootPath()}/labs/xsl/task1/source.xsl`,
      },
      {
        name: 'Введение в XSLT, XPath. Задание 2',
        taskUrl: 'http://kodaktor.ru/svg.pdf',
        resultUrl: `${getRootPath()}/labs/xsl/task2/result.xml`,
        sourceUrl: `${getRootPath()}/labs/xsl/task2/source.xsl`,
      },
      {
        name: 'FUNC-007 Рекурсивные функции',
        taskUrl: 'https://kodaktor.ru/func_007',
        resultUrl: `${getRootPath()}/labs/func-007/index.html`,
        sourceUrl: `${getRootPath()}/labs/func-007/script.js`,
      },
      {
        name: 'Prototype chain. Цепочка прототипов',
        taskUrl: 'https://kodaktor.ru/g/proto_chain',
        resultUrl: '/proto-chain',
        sourceUrl: `${getRootPath()}/labs/proto-chain/script.js`,
      },
      {
        name: 'Массив промисов',
        taskUrl: 'https://kodaktor.ru/async_tasks',
        resultUrl: '/promise-array',
        sourceUrl: `${getRootPath()}/labs/promise-array/script.js`,
      },
    ],
  }),
};
</script>

<style scoped>

</style>
