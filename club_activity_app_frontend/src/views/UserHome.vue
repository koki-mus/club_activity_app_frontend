<template>
  <div class="about">
    <h1>User home page</h1>
    <button v-on:click="logout">ログアウト</button>

  </div>
</template>


    


<script>
//import {thiscall} from '@/modules/module';
//thiscall.call(this)
//console.log(this.$store.state.account.userId)
export default {
  name: "UserHome",
    created: function() {
    this.fetchHello();
    },
  methods: {
     logout: function() {
      //logoutの関数を持ってくる。Storeの情報消すとか含めいろいろ足りない
      this.$store.dispatch("auth", {
        userId: '',
        userToken: ''
      });
      console.log("logout")
      this.$router.go(this.$router.currentRoute.path)//リロードしてstate消してる。他にも効果ありそう。付けとくのが無難、
      console.log(this.$store.state.account.userId)
      this.$router.push("/UserLogin")//ログイン画面に遷移、logoutの関数に組み込んだ方が良い 
    }, 
    fetchHello() {//認証を作る時に変える
/*    const uri = "http://localhost:8080/hello";//認証のサーバ
      this.axios.get(uri
      // ,{  //tokenを使う設定
      //     headers: { 
      //     "Content-Type": "application/json", 
      //     "Authorization": $store.state.account.userToken 
      // },
      ).then(response => {
          this.message = response.data.message;
          }); */
      this.message = "hello vuex";//debug用
    }
  }
};
</script>