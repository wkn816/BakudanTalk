<template>
  <div>
    <h1>爆発</h1>
    <img :src="image_src" />
    <v-card>
      <h1>Talkする</h1>
      {{ messages }}
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image_src: true,
      messages: "",
    };
  },
  async fetch(){
    this.image_src = require("../assets/bakuhatsu.gif")
      setTimeout(() => {this.image_src = false;}, 4000);
      // setTimeoutで3000ms後にshowをfalseにする

    const messages = ['あああ','いいい','ううう'];
    const messageNo = Math.floor( Math.random() * messages.length);
    console.log(messages[messageNo]);
    }
};
</script>
