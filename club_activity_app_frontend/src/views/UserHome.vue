<template>
  <div class="about">
    <h1>User home page</h1>
    <h3>Welcome {{ $store.state.account.userId }}</h3>
    <button v-on:click="logout">ログアウト</button>

  </div>
</template>


    


<script>
import {logout} from '@/modules/module';

//import store from '@/store'
//alert(store.state.account.userId)
export default {
  name: "UserHome",
    created: function() {
    this.fetchHello();
    },
  methods: {
    logout: function() {
      logout()
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