'use strict';
import axios from 'axios' //追記
import store from '@/store'
import router from '@/router'
import { reset_state } from '@/modules/module';



const baseURL = "http://localhost:8888"

export function login(user) {
    //認証付ける
    reset_state()//認証後
    axios.get(baseURL+'/hoge',{}, {withCredentials : true})
        .then(function (response){
  
          
          
          store.dispatch("auth", {
            userId: user.userId,//this.user.userId
            userToken: response.data.token
          })
  
        }).then(function () {
            router.push("/"); //(router.query.redirect);
          }
        )
  }
   
  export function signup(user) {//全部テスト用でログインと同じ
    //認証付ける
    reset_state()//認証後
    axios.get(baseURL+'/hoge',{}, {withCredentials : true})
        .then(function (response){
  
          
  
          store.dispatch("auth", {
            userId: user.userId,//this.user.userId
            userToken: response.data.token
          })
  
        }).then(function () {
            router.push("/"); //(router.query.redirect);//アーティスト登録などの画面へ
          }
        )
  }
  