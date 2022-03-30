<template>
  <div class="UserLoginForm">
    <h1>Login</h1>
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
import {login} from '@/modules/module'
export default {
  name: 'UserLoginForm',
    data() {
      return {
        user: {},
        currentComponent:"UserLoginForm"
    };
  },

  methods: {
    doLogin() {login(this.user);
    }
  }
};



</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
