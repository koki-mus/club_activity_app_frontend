<template>
  <div class="UserHome">
    <UserHomeHeader v-bind:mediaType="mediaType"/>
    <h1>User home page</h1>
    <h3>Welcome {{ $store.state.account.userId }}{{ $store.state.account.userToken}}</h3>
    <button v-on:click="logout">ログアウト</button>
<h2>{{mediaType}}</h2>
  </div>
</template>


    
<script>
import {logout} from '@/modules/module';
import UserHomeHeader from '@/components/UserHomeHeader'

//import store from '@/store'
//alert(store.state.account.userId)
export default {
  name: "UserHome",
    created: function() {
    this.tellMediaType();
    },
    mounted(){
      window.addEventListener('resize',this.tellMediaType);
    },
    data(){
      return{
        mediaType: "pc"
      };
    },
  methods: {
    logout: function() {
      logout()
    }, 
    tellMediaType(){
      if (window.innerWidth > 400) {
        this.mediaType = "pc"
      }else{
        this.mediaType ="mobile"
    }
    }
  },
  components:{
    UserHomeHeader
  }
};

</script>