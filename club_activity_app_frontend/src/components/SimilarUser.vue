<template>
  <div class="SimilarUser">
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
  border: 1px solid;
  border-color: #7df;
  border-radius:5px;
  box-shadow: 1px 1px 1px;
  padding: 1px 3px;
  margin: 30px 3px;
  cursor: pointer;
}
</style>