'use strict';
export const hello = name => `Hello ${name}`
export const goodbye = name => `Goodbye ${name}`
export const date = new Date()

export default name => `Default ${name}`


import axios from 'axios' //追記
import store from '@/store'
import router from '@/router'
export function apireq_test() {
    axios.get('localhost:8080/')
.then((response) => {
  console.log(response.data.origin);
});
}

export function test(){
    console.log("aaaaaaaaaaa")
}

export function reset_state(){//Storeの情報の消し方改善すべき
  store.dispatch("auth", {
    userId: '',
    userToken: ''
  });
}


export function logout() {

  reset_state()
  router.go(router.currentRoute.path)//リロードしてstate消してる。他にも効果ありそう。付けとくのが無難、
  router.push("/UserLogin")//ログイン画面に遷移、logoutの関数に組み込んだ方が良い
}


export function login(user) {
  //認証
  reset_state()//認証後
  store.dispatch("auth", {
    userId: user.userId,//this.user.userId
    userToken: 'dummy token'
  })
  router.push("/");//(router.query.redirect);  
}

