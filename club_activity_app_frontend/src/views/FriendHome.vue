<template>
  <div class="FriendHome">
    <h1>{{ user.name }}</h1>
    <p>this is friend page</p>
    {{user.name}}

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