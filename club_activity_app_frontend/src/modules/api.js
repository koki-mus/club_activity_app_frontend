'use strict';
import axios from 'axios' //追記
import store from '@/store'
import router from '@/router'
import { reset_state } from '@/modules/module';


/*ユーザが持っている情報 
token
name
email
pass
favart{id,自分が選んでいるもの、そうでないもの}
similaruser */

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
        router.push("/UserDataRegister"); //(router.query.redirect);//アーティスト登録などの画面へ
      })
}
  
export function RegistFavoriteArtists(artists){
    console.log("from api module, regist favartists :"+artists)
}

export function GetFavoriteArtists(){
  return ["favaaa","favbbb","favccc"]
}

export function GetCandidateArtists(){
  return ["favaaa","candddd","candeee","candfff"]
}

export function GetSimilarUsers(){
  return [
    {
      userId:"Aid",
      name:"userA",
      FavoriteArtists:["A_1","A_2","A_3","A_4"]
    },
    {
      userId:"Bid",
      name:"userB",
      FavoriteArtists:["B_1","B_2","B_3","B_4"]
    },
  ]
}

/* 
login

signup

GetArtists

GetSimilarUsers


*/