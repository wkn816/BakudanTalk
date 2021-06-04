<template>
  <v-app class="bomber-all">

    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <nuxt-link to="/">
      <img :src="titleLogo" class="title-logo">
    </nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      titleLogo: require("../assets/bomber-logo.png")
    }
  }
}
</script>
<style lang="scss" scoped>

$pc: 1024px; // PC
$tab: 680px; // タブレット
$sp: 480px;  // スマホ

@mixin pc {
  @media (max-width: ($pc)) {
    @content;
  }
}
@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.bomber-all{
  background-size: 100%;
  color: #fffffe;
  text-align: center;
  background-color: #0f0e17;
  font-family: 'HogeHogeFont';
}
.title-logo{
  width: 130px;
}
</style>
