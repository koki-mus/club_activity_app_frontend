<template>
  <div class="UserDataRegiser">


    <h1>好きなアーティストを選びましょう 新規も変更も対応させる、認証ないとこのページ来れない</h1>
    <p>ユーザーID: {{ $store.state.account.userId }}</p>
    <h3>選択済みのアーティスト</h3>
    <div class="artist-list favorite-list flexwrap">
      <transition-group name="list-complete" tag="p">
      <p v-for="artist in FavoriteArtists" v-bind:key="artist" 
        v-on:click="FavoriteClick(artist)" class="artist favorite list-complete-item">
        {{ artist }}
      </p>
      </transition-group>
    </div>

    <!-- <button v-on:click="doRegistFavoriteArtists" :disabled="FavoriteArtists.length == 0 || processing">決定</button> -->
    <SingleSubmitButton :onclick="doRegistFavoriteArtists">決定</SingleSubmitButton> 
    <h3>下から選んでください</h3>
    <!-- 検索機能つけよう -->
      <div class="artist-list candidate-list flexwrap">
        <transition-group name="list-complete" tag="p">
        <p v-for="artist in CandidateArtists" :key="artist" 
          v-on:click="CandidateClick(artist)" class="artist candidate list-complete-item">
          {{ artist }}
        </p>
        </transition-group>
        </div>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>

import SingleSubmitButton from '@/components/SingleSubmitButton'
import {RegistFavoriteArtists,GetFavoriteArtists,GetCandidateArtists} from '@/modules/api'
export default {
  name: "UserDataRegister",
  methods: {
    FavoriteClick(artist){
      this.FavoriteArtists = this.FavoriteArtists.filter(function(x){return x != artist});
      this.CandidateArtists.push(artist)
    },
    CandidateClick(artist){
      this.CandidateArtists = this.CandidateArtists.filter(function(x){return x != artist})
      this.FavoriteArtists.push(artist)
    },
    doRegistFavoriteArtists(){//promiseを返すようにする
      return new Promise((resolve) => {
            var res = RegistFavoriteArtists(this.FavoriteArtists)
            setTimeout(() => {console.log(res,"sss")}, 5000);
            resolve();
            // RegistFavoriteArtistの返値をresにいれれない、使えないの治そう
    })
    },
    GetFavoriteArtists,
    GetCandidateArtists
  },
  components:{
    SingleSubmitButton,
  },
  data: function(){
    return{
      FavoriteArtists:["aaa","bbb"],//apiで入手してくる
      CandidateArtists:["ccc","ddd"],
      processing: false,
    }
  },
  created: function() {
    this.FavoriteArtists = GetFavoriteArtists();
    this.CandidateArtists = GetCandidateArtists().filter((val) => !this.FavoriteArtists.includes(val));
  },
};

</script>

<style scoped>
.artist-list{
  width:auto;
  /* max-width: 800px; */
}


.favorite{
  background: #e0ffff;
}

.list-complete-item {
  transition: all 0.4s ease;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>