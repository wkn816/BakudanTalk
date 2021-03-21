<template>
    <div>
<h1>
</h1>
    </div>
</template>

<script>

export default {
  data() {
    return {
      count: "",
    };
  },
  components: {
  },
  module() {
    if (this.$store.state.counter.counter % 15 === 0) {
      console.log("15の倍数を表示");
    }
  }
};
</script>
