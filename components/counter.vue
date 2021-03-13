<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{$store.state.counter.counter}}
    <button @click="countUp">+1</button>
    <p v-if="topic" class="topic">{{ topic }}</p>
  </section>
</template>

<script>
// import Topic from "~/components/Topic.vue";

export default {
  data: function() {
    return {
      title : "BakudanTalk",
      error : ""
    };
  },
  methods: {
    async countUp() {
      this.$store.commit("counter/countUp");
      if (this.$store.state.counter.counter % 15 === 0) {
          this.topic = "出発日を入力してください";
        console.log("15の倍数を表示");
      }
    }
  }
};
</script>>