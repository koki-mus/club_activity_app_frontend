<template>
  <div class="UserLogin">
    <h1>This is an login page</h1>
      <HelloMy :msg="Date().toLocaleString()"/>
      <h3>Welcome {{ $store.state.account.userId }}</h3>
      <p>{{Date().toLocaleString()}}</p>
      <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="user.userId" />
        <label>Password</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <button type="submit">Sign In</button>
      </form>


  </div>


</template>

<script>

import HelloMy from '@/components/HelloMy.vue'
import {login} from '@/modules/module'
export default {
  name: 'UserLogin',
  components: {
    HelloMy
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    doLogin() {login(this.user);
    //this.$router.push(this.$router.query.redirect);
    }
    /* doLogin() {
      new Promise((resolve) =>{

        this.$store.dispatch("auth", {
          userId: this.user.userId,//this.user.userId
          userToken: 'dummy token'
        });
        resolve()
      }).then(()=>{
        this.$router.push(this.$route.query.redirect);
      })

    } */
  }
};


import {test} from '@/modules/module';
//apireq_test();
test()

</script>


