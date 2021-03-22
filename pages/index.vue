<template>
  <section class="container">
    <div>
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
  module() {
    // if (this.$store.state.counter.counter % 15 === 0) {
    //   console.log("15の倍数を表示");
    // }
  }
};
</script>
