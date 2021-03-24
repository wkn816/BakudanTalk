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
      image_src: true,
    };
  },
  async fetch(){
    this.image_src = require("../assets/bakuhatsu.gif")
      setTimeout(() => {this.image_src = false;}, 4000);
      // setTimeoutで3000ms後にshowをfalseにする
    }
};
</script>
