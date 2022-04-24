<template>
  <div class="UserDataRegiser">
    <UserHomeHeader class="margin0"/>

    <h1>regester Data 新規も変更も対応させる、認証ないとこのページ来れない</h1>
    <p>ユーザーID: {{ $store.state.account.userId }}</p>
    <h3>お気に入りアーティスト</h3>
    <div class="artist-list selected-list">
      <span class="artist selected">alexandros</span>
      <span class="artist selected">alexandros</span>
      <span class="artist selected">alexandros</span>
      <span class="artist selected">alexandros</span>
      <span class="artist selected">alexandros</span>
    </div>
    <h3>アーティスト候補</h3>
      <div class="artist-list candidate-list">
        <span class="artist candidate">arararar</span>
        </div>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import UserHomeHeader from '@/components/UserHomeHeader'

export default {
  name: "UserDaraRegister",
  methods: {

  },
  components:{
    UserHomeHeader
  }
};

</script>

<style scoped>
.artist-list{
  width:auto;
  max-width: 800px;
  display: flex;
  display : -webkit-box;     /* old Android */
  display : -webkit-flex;    /* Safari etc. */
  display : -ms-flexbox;  
  flex-wrap:wrap;
  border: 1px;
  margin: 20px 10px;
  justify-content: center;
}
.artist{
  border: 1px solid;
  border-radius:5px;
  height: 20px;
  box-shadow: 2px 2px 2px;
  padding: 2px 4px;
  margin: 6px 4px;
  cursor: pointer;
}
.selected{
  background: #e0ffff;
}
</style>