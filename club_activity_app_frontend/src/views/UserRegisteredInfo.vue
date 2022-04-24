<template>
  <div class="UserRegisteredInfo">
    <UserHomeHeader class="margin0"/>
    <h1>regesterd info</h1>
    <p>ユーザーID: {{ $store.state.account.userId }}</p>
    <h3>お気に入りアーティスト</h3>

    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import UserHomeHeader from '@/components/UserHomeHeader'

export default {
  name: "UserRegisteredInfo",
  methods: {

  },
  components:{
    UserHomeHeader
  }
};

</script>