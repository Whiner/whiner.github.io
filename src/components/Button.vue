<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="#fdfdfd" :elevation="hover ? 4 : 3" style="cursor:pointer" @click="onClick">
        <v-container fluid class="py-2">
          <v-row>
            <v-col
              class="rounded-l text-center my-1 py-3"
              cols="3"
              :style="{'background-color': color}"
            >
              <v-icon color="#fdfdfd">{{ icon }}</v-icon>
            </v-col>
            <v-col cols="8" class="pl-6" align-self="center">
              <span :style="{'color': color}">{{ text }}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: 'Button',

  props: {
    text: String,
    color: String,
    icon: String,
    url: String,
  },

  data: () => ({}),
  methods: {
    onClick() {
      if (this.url.startsWith('/')) {
        this.$router.push(this.url);
        return;
      }
      window.location.href = this.url;
    },
  },
};
</script>
