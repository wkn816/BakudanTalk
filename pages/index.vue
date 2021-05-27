<template>
<section>
<v-container>
      <v-row>
        <v-col cols="12" offset-sm="1" sm="6" offset-md="2" md="8">
            <img :src="startlogo" class="start-logo">
        </v-col>
        <v-col cols="12" offset-sm="1" sm="6" offset-md="4" md="4">

            <v-hover v-slot:default="{ hover }">
              <v-btn to="/top" nuxt color=#ff8906 block>
              <v-icon v-text="hover ? 'mdi-restore' : 'mdi-refresh'"></v-icon>START
              </v-btn>
              </v-hover>
        </v-col>
        <v-col cols="12" offset-sm="1" sm="6" offset-md="4" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-btn to="/about" nuxt color=#ff8906 block>
              <v-icon v-text="hover ? 'mdi-restore' : 'mdi-refresh'"></v-icon> HOW TO USE
              </v-btn>
              </v-hover>
        </v-col>
      </v-row>
    </v-container>
</section>
</template>

<script>

export default {
  data() {
    return {
      startlogo: require("../assets/start-logo.png")
    };
  },
  components: {
  },
  created() {
  },
  module() {
  }
};
</script>
<style>
.start-logo{
  width: 60%;
}

</style>
