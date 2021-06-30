<template>
    <v-container>
      <v-row>
        <v-col cols="12" offset-sm="1" sm="4" offset-md="2" md="8">
            <v-card color=#2e2f3e outlined tile class="about-card">
              <v-card-title primary-title class="justify-center">遊びかた
              </v-card-title>
              <v-card-text>
                <p>
                    <v-icon color="#fffffe">mdi-numeric-1-circle</v-icon>
                    １〜３回 好きな回数爆弾をクリック！！
                </p>
                <p>
                    <v-icon color="#fffffe">mdi-numeric-2-circle</v-icon>
                    ランダムで爆弾が爆発！！
                </p>
                <p>
                    <v-icon color="#fffffe">mdi-numeric-3-circle</v-icon>
                    爆発させてしまった方は、表示されたお題について暴露話し！
                </p>
                <p>
                    <v-icon color="#fffffe">mdi-numeric-4-circle</v-icon>
                    リプレイボタンを押してもう一周♪
                </p>
                <p class="howto-lasttext">
                  <v-icon color="#ff8906">mdi-emoticon-devil-outline</v-icon>
                    あの人の意外な一面が明らかになるかも・・・
                  <v-icon color="#ff8906">mdi-emoticon-devil-outline</v-icon>
                </p>
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
</script>
<style>

p {
  text-align: left;
    font-size: 16px;
    line-height: 2.0em;
}
.howto-lasttext{
  text-align: center;
  font-size: 20px;
}
.justify-center{
  font-size: 30px;
  color: #e53170;
}
.about-card{
margin-top: 100px;
}
</style>
