<template>
  <div class="UserHome">

    <h1>User home page</h1>
    <h3>Welcome {{ $store.state.account.userId }}{{ $store.state.account.userToken}}</h3>

    <SimilarUser v-for="user in GetSimilarUsers()" :key="user.UserId" v-bind:user=user />
  </div>
</template>


    
<script>

import SimilarUser from '@/components/SimilarUser'
// import UserHomeMain from '@/components/UserHomeMain'

//import store from '@/store'
//alert(store.state.account.userId)
import {GetSimilarUsers} from '@/modules/api'
export default {
  name: "UserHome",
    methods: {
    GetSimilarUsers,

  },
  data(){
    return{
      
      }
    },
  components:{

    SimilarUser
  }
};

</script>