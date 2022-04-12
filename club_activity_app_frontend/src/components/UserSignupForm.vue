<template>
  <div class="UserSignupForm">
    <h1>Sigin up</h1>
      <form v-on:submit.prevent="doSignup">
        <label>ユーザーID</label><br>
        <input type="text" placeholder="user id" v-model="user.userId" v-on:input="make_userId_message"/><br>
        <span v-html="userId_message"></span>
        <label>パスワード</label><br>
        <input type="password" placeholder="password" v-model="pass1" v-on:input="make_pass1_message(); make_pass2_message()"/><br>
        <span v-html="pass1_message"></span>

        <label>もう一度パスワードを入力してください</label><br>
        <input type="password" placeholder="password" v-model="pass2" v-on:input="make_pass2_message"/><br>
        <span v-html="pass2_message"></span>

        <button type="submit" :disabled="!pass1_flag || !pass2_flag || !userId_flag" >Sign In</button>

      </form>
      <!-- <p class="resMessage" v-html="resMessage"></p> -->
  </div>
</template>

<script>
import {signup} from '@/modules/module'
export default {
  name: 'UserSignupForm',
      data() {
      return {
        user: {},
        currentComponent:"UserSignupForm",
        pass1:"",
        pass2:"",
        pass1_message:"<br>",
        pass2_message:"<br>",
        userId_message:"<br>",
        pass1_flag: false,
        pass2_flag: false,
        userId_flag: false,
        // resMessage:"<p></p>"
    };
  },
  methods: {
    doSignup() {
      if(this.pass1_flag && this.pass2_flag){
        this.user.password = this.pass1
        signup(this.user);
      }
      else{
        alert("不正な入力があります。")
      }
    },
    make_pass1_message() {
      var message = ""
      if (this.pass1.length == 0) {
        message += "入力は必須です。"
      }
      else{
        if(this.pass1.length < 8) {
          message += "8文字以上にしてください。"
        }
      }
      if (this.pass1.length >= 32) {
        message += "32文字以下にしてください。"
      }
      if (/\W+/g.test(this.pass1)){
        message += "半角英数字と'_'のみ使えます。"
      }
      if (message == "") {
        this.pass1_flag = true
      } else {
        this.pass1_flag = false
      }
      this.pass1_message = "<font color='red'>"+message+"</font><br>"
    },
    make_pass2_message(){
      var message = ""
      if(this.pass1_flag){
        if (this.pass1 == this.pass2){
          message = "<font color='green'>パスワードが一致しました。</font><br>"
          this.pass2_flag = true
        }else{
          this.pass2_flag = false
          message = "<font color='red'>パスワードが一致しません。</font><br>"
        }
      }else{
        this.pass2_flag = false
      }
      this.pass2_message = message
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
  }
}
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

button:disabled{
  /* background: #42b983; */
  color: #aaaaaaaa;
}
</style>
