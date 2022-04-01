<template>
  <div class="UserLogin">
    <h1>login & signin page</h1>
      <!-- <HelloMy :msg="Date().toLocaleString()"/> -->
      <h3>Welcome {{ $store.state.account.userId }}</h3>
      <p>{{Date().toLocaleString()}}</p>
<!--       <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="user.userId" />
        <label>Password</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <button type="submit">Sign In</button>
      </form> -->
      <div>
        <div v-if="currentComponent == 'UserSigninForm'">
          <UserSigninForm/>
          <p>アカウントをお持ちの方は</p><span style="cursor: pointer;" @click="currentComponent = 'UserLoginForm'">こちら</span>
        </div>
        <div v-if="currentComponent == 'UserLoginForm'">
          <UserLoginForm/>
          <p>新規登録は</p><span style="cursor: pointer;" @click="currentComponent = 'UserSigninForm'">こちら</span>
        </div>
        <!-- <component v-bind:is="currentComponent"></component> -->

      </div>


  </div>


</template>

<script>

// import HelloMy from '@/components/HelloMy.vue'
import UserLoginForm from "@/components/UserLoginForm.vue";
import UserSigninForm from "@/components/UserSigninForm.vue";
import {login} from '@/modules/module'
export default {
  name: 'UserLogin',
  components: {
    // HelloMy,
    UserLoginForm,
    UserSigninForm
  },
  data() {
    return {
      user: {},
      currentComponent:"UserLoginForm"
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

</script>


