<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="#fdfdfd" :elevation="hover ? 3 : 1" style="cursor:pointer" @click="onClick">
        <v-container fluid class="py-2">
          <v-row :style="{'background-color': color}"
                 style="margin-left: -13px; margin-right: -13px"
                 class="rounded-t"
          >
            <v-col class="text-center py-7">
              <v-icon color="#fdfdfd">{{ icon }}</v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col align-self="center" class="text-center subtitle-2 py-2" >
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
