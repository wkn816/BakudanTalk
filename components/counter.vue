<template>
  <section>
    <h2>{{ title }}</h2>
    counter: {{$store.state.counter.counter}}
    <button
      @click="countUp"
    >+1</button>
  </section>
</template>

<script>
export default {
  data: function(){
    return{
      title : 'BakudanTalk'
    }
  },
  methods:{
    async countUp(){
      this.$store.commit('counter/countUp');
      if (this.$store.state.counter.counter % 15 === 0) {
      console.log("15の倍数を表示");
    }
    }
  }
}
</script>>