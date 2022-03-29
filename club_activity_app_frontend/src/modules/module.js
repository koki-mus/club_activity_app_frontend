'use strict';
export const hello = name => `Hello ${name}`
export const goodbye = name => `Goodbye ${name}`
export const date = new Date()

export default name => `Default ${name}`


import axios from 'axios' //追記
export function apireq_test() {
    axios.get('localhost:8080/')
.then((response) => {
  console.log(response.data.origin);
});
}

export function test(){
    console.log("aaaaaaaaaaa")
}

export function reset_state(){
  this.$store.dispatch("auth", {
    userId: '',
    userToken: ''
  });
}


export function logout() {
  console.log("logout")
  //Storeの情報消すとか含めいろいろ足りない.store永続化したら大幅に変える
  this.$store.dispatch("auth", {
    userId: '',
    userToken: ''
  });
  console.log("dispatch")
  //reset_state()
  this.$router.go(this.$router.currentRoute.path)//リロードしてstate消してる。他にも効果ありそう。付けとくのが無難、
  this.$router.push("/UserLogin")//ログイン画面に遷移、logoutの関数に組み込んだ方が良い
}

export function thiscall(){
console.log(this.$store.state.account.userId)}