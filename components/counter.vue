<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{$store.state.counter.counter}}
    <button @click="countUp" class="button">
      <img :src="image_src1" class="button">
    </button>
    <!-- <h1 v-if="fizzbuzz">
    <img :src="image_src">
    </h1> -->
  </section>
</template>
<script>
  export default {
    data: function () {
      return {
        title: "BakudanTalk",
        topic: "",
        image_src: require("../assets/bakuhatsu.gif"),
        image_src1: require("../assets/bakudan.png"),
        test: require("../assets/bakudan.png"),
      };
    },
    methods: {
      async countUp() {
        this.$store.commit("counter/countUp");
        if (this.$store.state.counter.counter % 15 === 0) {
          this.topic = "hogehoge";
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
  .button {
    width: 50%;

    &:active {
      box-shadow: none;
      transform: translate3d(-6px, 6px, 0);
    }
  }

</style>
