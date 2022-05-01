<template>
  <div class="SimilarUser" v-on:click="PushToFriendHome()">
    <h1>{{this.user.name}}</h1>
    <div class="arthist-list flexwrap">
      <span class="artist" v-for="artist in user.FavoriteArtists" :key="artist">
        {{artist}}<!--アーティストクリックで、このアーティストを選んでいるユーザーの検索  -->
      </span>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'SimilarUser',
    props: {
      // A function which returns Promise.
      user: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        
      };
    },
    methods: {
      PushToFriendHome(){
      this.$router.push("/friend/"+this.user.userId + "/")
    }
    }
  };
</script>

<style scoped>
h1{
  font-size: 20px;
  text-align: left;
  margin-left: 30px ;
}
.SimilarUser{
  border: solid 1px;
  border-radius:20px;
  margin: 20px 10px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

.artist{
  font-size: 11px;
  border-color: #7df;
  padding: 1px 3px;
  cursor:text
}
</style>