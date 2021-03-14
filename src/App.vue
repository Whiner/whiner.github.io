<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-icon class="mr-5">mdi-alpha-s-circle</v-icon>

      <v-toolbar-title>Shilenko Alexander's Page</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
