<template>
  <div>
    <h1>爆弾話をする</h1>
    <img :src="image_src" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_src: require("../assets/bakuhatsu.gif"),
      // image_src: ""
    };
  },
  components: {},
  module() {},
  methods: {},
  async fetch() {
    var fn = function() {
      this.image_src = "";
      console.log("3秒経過しました");
    };
    var tm = 3000;
    setTimeout(fn, tm);
  }
};
</script>
