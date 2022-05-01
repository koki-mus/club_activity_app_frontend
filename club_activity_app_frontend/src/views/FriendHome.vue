<template>
  <div class="FriendHome">
    <h1>{{ user.name }}</h1>
    <p>this is friend page</p>
      <div class="flexwrap">
        <p v-for="artist in this.user.FavoriteArtists" :key="artist" 
           class="artist">
          {{ artist }}
        </p>
      </div>

  </div>
</template>

<script>
import {GetFriendInfo} from '@/modules/api'
export default {
  name: 'FriendHome',
  components: {
  
    },
    methods: {
      GetFriendInfo
    },
  data() {
    return {
      user:{
       userId:"id",
       name:"name",
       FavoriteArtists:["  ","  ","  ","  "],
       SimilarUsers:[" "," "," "," "]
      }
    };
  },
  created: function() {
    this.user = GetFriendInfo(this.$route.params.id);
  },
}
</script>

<style scoped>
.artist{
  
}
div{
  width: auto;
}
</style>