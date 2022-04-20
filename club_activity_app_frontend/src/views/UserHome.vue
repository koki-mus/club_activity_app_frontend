<template>
  <div class="UserHome">
    <UserHomeHeader class="margin0"/>
    <h1>User home page</h1>
    <h3>Welcome {{ $store.state.account.userId }}{{ $store.state.account.userToken}}</h3>
    <button v-on:click="logout">ログアウト</button>


  </div>
</template>


    
<script>
import {logout} from '@/modules/module';
import UserHomeHeader from '@/components/UserHomeHeader'
import UserHomeMain from '@/components/UserHomeMain'

//import store from '@/store'
//alert(store.state.account.userId)
export default {
  name: "UserHome",
  methods: {
    logout: function() {
      logout()
    }
  },
  components:{
    UserHomeHeader
  }
};

</script>