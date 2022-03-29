<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>welcome {{ $store.state.account.userId }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: ""
    };
  },
  created: function() {
    this.fetchHello();
  },
  methods: {
    fetchHello() {
/*       const uri = "http://localhost:8080/hello";//認証のサーバ
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
}
</script>
