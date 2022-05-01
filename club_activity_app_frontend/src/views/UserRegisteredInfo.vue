<template>
  <div class="UserRegisteredInfo">

    <h1>regesterd info</h1>
    <p>ユーザーID: {{ $store.state.account.userId }}</p>
    <h3>お気に入りアーティスト</h3>
    <router-link to="/UserDataRegister">UserDataRegister</router-link>
    <br><router-link to="/">Home</router-link>
  </div>
</template>

<script>


export default {
  name: "UserRegisteredInfo",
  methods: {

  },
  components:{

  }
};

</script>