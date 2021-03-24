<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{$store.state.counter.counter}}
    <button @click="countUp" class="button">
      <img :src="bakudan" class="bakudan">
    </button>
  </section>
</template>
<script>
  export default {
    data: function () {
      return {
        title: "BakudanTalk",
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
    computed: {
      // test(){
      //   return this.$store.state.counter.counter % 15 === 0
      // }
      // fizzbuzz() {
      //   return this.$store.state.counter.counter % 15 === 0
      //   // this.topic = "hogehoge"
      //   console.log("15の倍数を表示");
      // },
    }

  };

</script>
<style lang="scss">
  .bakudan {
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
  }

</style>
