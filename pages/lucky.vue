<template>
    <div>
<h1>爆弾話をする</h1>
    <img :src="image_src">
    </div>
</template>

<script>

export default {
  data() {
    return {
      image_src: require("../assets/bakuhatsu.gif"),
    };
  },
  components: {
  },
  module() {
  }
};
</script>
