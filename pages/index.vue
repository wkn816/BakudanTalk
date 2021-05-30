<template>
<section>
<v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
            <img :src="startlogo" class="start-logo">
        </v-col>
        <v-col cols="12" offset-sm="2" sm="8" offset-md="4" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-btn class="topbtn" to="/play" nuxt block color=#7f5af0 height="80" :ripple="{ center: true }">
              <v-icon large v-text="hover ? 'mdi-arrow-left-thick' : ''"></v-icon>
              <div class="top-text">START</div>
              </v-btn>
              </v-hover>
        </v-col>
        <v-col cols="12" offset-sm="2" sm="8" offset-md="4" md="4">
            <v-hover v-slot:default="{ hover }">
              <v-btn to="/about" nuxt color=#2cb67d block height="80" :ripple="{ center: true }">
              <v-icon large v-text="hover ? 'mdi-arrow-left-thick' : ''"></v-icon>
              <div class="top-text"> HOW TO USE</div>
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
<style lang="scss">
$sp: 480px;  // スマホ
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.start-logo{
  width: 40%;
  @include sp {
    width: 300px;
  }
}
.top-text{
  font-size: 60px;
}

</style>
