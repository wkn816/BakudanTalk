<template>
  <section class="container">
    <div>
      <div v-for="count in 1">
          <div v-if="$store.state.counter.counter % 15 === 0" v-bind:style="fizzBuzzStyle">FizzBuzz</div>
          <div v-else-if="$store.state.counter.counter % 5 === 0" v-bind:style="fizzStyle">Fizz </div>
          <div v-else-if="$store.state.counter.counter % 3 === 0" v-bind:style="BuzzStyle">Buzz </div>
          <div v-else>{{ count }}</div>
        </div>

        <Counter>
          <!-- {{ counter }} -->

        </Counter>
    </div>
  </section>
</template>

<script>
import Counter from '~/components/Counter.vue'

  export default {
    components: {
      Counter
    }

  }

</script>
