<template>
<section>
<v-container>
      <v-row>
        <v-col cols="12" offset-sm="1" sm="4" offset-md="2" md="8">
            <img :src="startlogo" class="start-logo">
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
