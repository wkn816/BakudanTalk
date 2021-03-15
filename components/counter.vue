<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{$store.state.counter.counter}}
    <button @click="countUp">+1</button>
    <p v-if="topic" class="topic">{{ topic }}</p>
    <img :src="image_src" v-if="topic">
  </section>
</template>
<script>
export default {
  data: function() {
    return {
      title : "BakudanTalk",
      topic : "",
      image_src: require("../assets/bakuhatsu.gif"),
    };
  },
  methods: {
    async countUp() {
      this.$store.commit("counter/countUp");
      if (this.$store.state.counter.counter % 15 === 0) {
          this.topic = "hogehoge";
          return
      console.log("15の倍数を表示");
      }
    },
  },

};

</script>
<style>
</style>