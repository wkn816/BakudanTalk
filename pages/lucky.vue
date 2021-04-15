<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" offset-sm="1" sm="4" offset-md="2" md="8">
            <img :src="image_src" />
            <v-card v-if="test">
              <v-card-title class="justify-center">Let's Bakudan talk</v-card-title>
              <v-card-text>
                <p class="theme-text">{{ test }}</p>
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" offset-sm="1" sm="4" offset-md="5" md="4">
              <v-btn v-if="test" to="/" nuxt>
              <v-icon large color=#e53170>
            mdi-restore
          </v-icon>
              REPLAY</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        image_src: true,
        test: "",
        test2: "",
      };
    },
    async fetch() {
      this.image_src = require("../assets/bakuhatsu3.GIF")
      setTimeout(() => {
        this.image_src = false;
      }, 2800);
      // setTimeoutで3000ms後にshowをfalseにする

      const messages = ['今の趣味にハマったきっかけは？',
        '新たに始めたい趣味について聞かせてください',
        '新入社員時代に失敗してしまったこと',
        '仕事orプライベートで直面している悩み',
        '今までで一番思い出に残っているクリスマスはいつ？キラキラエピソードも！',
        '最近感じたハッピーなこと',
        '最近感じたアンハッピーなこと',
        '異性を好きになるきっかけを教えてください',
        '異性ににアプローチする方法を教えてください'
      ];
      const messageNo = Math.floor(Math.random() * messages.length);
      console.log(messages[messageNo]);
      console.log(messageNo);
      const test = messages[messageNo];
      setTimeout(() => {
        this.test = test;
      }, 2780);
      console.log(test);
      // return this.test = test
    },
  };

</script>

<style>
.theme-text{
  text-align: center;
  font-size: 20px;
}
</style>
