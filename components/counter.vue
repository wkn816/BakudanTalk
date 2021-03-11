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
    }
  }
}
</script>>