<template>
  <section>
    <v-container>
      <v-row>
          <v-col cols="12" sm="12" md="12">
            <img :src="playTitle" class="play-title">
          </v-col>
        <v-col cols="12" sm="12" md="12" lg="12">
            <button @click="countUp" class="bakudan">
                <img :src="bakudan" class="bakudan-img">
            </button>
            <h3>1〜3回爆弾をクリックして次の人に回して</h3>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
  export default {
    data: function () {
      return {
        playTitle: require("../assets/bomber-logo.png"),
        image_src: require("../assets/bakuhatsu.gif"),
        bakudan: require("../assets/bakudan.png"),
      };
    },
    methods: {
      async countUp() {
        this.$store.commit("counter/countUp");
        if (this.$store.state.counter.counter % 15 === 0) {
        this.$router.push('/lucky')
          return
        console.log("15の倍数を表示");
        }
      },
    },
  };

</script>
<style lang="scss">
$sp: 480px;  // スマホ
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

  .bakudan-img {
    width: 400px;
        &:active {
          box-shadow: none;
          // transform: translate3d(-6px, 6px, 0);
          animation: buruburu .2s  infinite;
        }
      @keyframes buruburu {
      0% {transform: translate(0px, 0px) rotateZ(0deg)}
      25% {transform: translate(8px, 8px) rotateZ(1deg)}
      50% {transform: translate(0px, 8px) rotateZ(0deg)}
      75% {transform: translate(8px, 0px) rotateZ(-2deg)}
      100% {transform: translate(0px, 0px) rotateZ(0deg)}
      }
      @include sp {
            width: 250px;
            }
  }

  .bakudan{
    outline: none;
  }

  h1{
    text-align: center;
    font-size: 30px;
  }

  h3{
    text-align: center;
  }
  .play-title{
    width: 30%;
  }
</style>
