<template class="test">
  <section class="container">
    <div class="ttt">
      <Counter></Counter>
    </div>
  </section>
</template>

<script>
import Counter from "~/components/Counter.vue";

export default {
  data() {
    return {
      count: "",
    };
  },
  components: {
    Counter
  },
  created() {
  },
  module() {
    // if (this.$store.state.counter.counter % 15 === 0) {
    //   console.log(“15の倍数を表示“);
    // }
  }
};
</script>
<style lang="scss" scoped>

</style>