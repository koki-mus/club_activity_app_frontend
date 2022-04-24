<template>
  <div class="UserLoginForm">
    <h1>アプリにログイン</h1>
    
      <form v-on:submit.prevent="doLogin">
        <label>ユーザーID</label>
        <input type="text" placeholder="user id" v-model="user.userId" v-on:input="make_userId_message" /><br>
                <span v-html="userId_message"></span>
        <label>パスワード</label>
        <input type="password" placeholder="password" v-model="pass" v-on:input="make_pass_message"/><br>
                <span v-html="pass_message"></span>
        <button type="submit" :disabled="!pass_flag || !userId_flag">Sign In</button>
      </form>

      <h3>LINElogin</h3>
      
  </div>
</template>

<script>
import {login} from '@/modules/api'
export default {
  name: 'UserLoginForm',
    data() {
      return {
        user: {},
        currentComponent:"UserLoginForm",
        pass:"",
        pass_message:"<br>",
        userId_message:"<br>",
        pass_flag: false,
        userId_flag: false,
    };
  },

  methods: {
    doLogin() {login(this.user);
    },
    make_userId_message() {
      var message = ""
      if (this.user.userId.length == 0) {
        message += "入力は必須です。"
      }else{
        if(this.user.userId.length < 8) {
          message += "8文字以上にしてください。"
        }
      }
      if (this.user.userId.length >= 32) {
        message += "32文字以下にしてください。"
      }
      if (/\W+/g.test(this.user.userId)){
        message += "半角英数字と'_'のみ使えます。"
      }
      if (message == "") {
        this.userId_flag = true
      } else {
        this.userId_flag = false
      }
      this.userId_message = "<font color='red'>"+message+"</font><br>"
    },
    make_pass_message() {
      var message = ""
      if (this.pass.length == 0) {
        message += "入力は必須です。"
      }
      else{
        if(this.pass.length < 8) {
          message += "8文字以上にしてください。"
        }
      }
      if (this.pass1length >= 32) {
        message += "32文字以下にしてください。"
      }
      if (/\W+/g.test(this.pass)){
        message += "半角英数字と'_'のみ使えます。"
      }
      if (message == "") {
        this.pass_flag = true
      } else {
        this.pass_flag = false
      }
      this.pass_message = "<font color='red'>"+message+"</font><br>"
    },
    
  }
};



</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
