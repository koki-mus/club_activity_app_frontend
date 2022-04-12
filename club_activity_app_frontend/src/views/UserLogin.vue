<template>
  <div class="UserLogin">
    <img src="favivon.ico" alt="logo">
      <h3>test :{{ $store.state.account.userId }}</h3>
<!--       <form v-on:submit.prevent="doLogin">
        <label>User ID</label>
        <input type="text" placeholder="customer id" v-model="user.userId" />
        <label>Password</label>
        <input type="password" placeholder="password" v-model="user.password" />
        <button type="submit">Sign In</button>
      </form> -->
      <div>
        <div v-if="currentComponent == 'UserSignupForm'">
          <UserSignupForm/>
          <p>アカウントをお持ちの方は<span class="link" style="cursor: pointer;" @click="currentComponent = 'UserLoginForm'">こちら</span></p>
        </div>
        <div v-if="currentComponent == 'UserLoginForm'">
          <UserLoginForm/>
          <p>新規登録は<span class="link" style="cursor: pointer;" @click="currentComponent = 'UserSignupForm'">こちら</span></p>
        </div>
        <!-- <component v-bind:is="currentComponent"></component> -->

      </div>


  </div>


</template>

<script>

// import HelloMy from '@/components/HelloMy.vue'
import UserLoginForm from "@/components/UserLoginForm.vue";
import UserSignupForm from "@/components/UserSignupForm.vue";
import {login} from '@/modules/module'
export default {
  name: 'UserLogin',
  components: {
    // HelloMy,
    UserLoginForm,
    UserSignupForm
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

<style scoped>
.link{
  color: blue;
  display: inline;
}
</style>


