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

    const messages = ['今の趣味にハマったきっかけは？',
                      '新たに始めたい趣味について聞かせてください',
                      '新入社員時代に失敗してしまったこと',
                      '仕事orプライベートで直面している悩み',
                      '今までで一番思い出に残っているクリスマスはいつ？キラキラエピソードも！',
                      '最近感じたハッピーなこと',
                      '最近感じたアンハッピーなこと',
                      '異性を好きになるきっかけを教えてください',
                      '異性ににアプローチする方法を教えてください'];
    const messageNo = Math.floor( Math.random() * messages.length);
    console.log(messages[messageNo]);
    console.log(messageNo);
    return this.messages = messages[messageNo]
    }
};
</script>
