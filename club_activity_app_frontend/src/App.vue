<template>
  <div id="app">
    <UserHomeHeader v-if="$route.path != '/login'"/>
    <router-view class="margin0" />
    <nav>
      <router-link to="/">Home</router-link>  |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">login</router-link>  |
      <router-link to="/UserDataRegister">UserDataRegister</router-link>
    </nav>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding:0px;
}
body {
  margin: 0px;
  padding:0px;

}

nav {
  padding: 0px;
  margin: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.margin0{
  margin: opx;
}

.flexwrap{
  /* display: flex; */
  display : -webkit-box;     /* old Android */
  display : -webkit-flex;    /* Safari etc. */
  display : -ms-flexbox;
  flex-wrap:wrap;
  /* border: solid 1px; */
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
  display: inline-block;
}

</style>

<script>
import UserHomeHeader from '@/components/UserHomeHeader'
export default {
    name: "app",
    created: function() {
      this.tellMediaType();
    },
    components:{
      UserHomeHeader
    },
    mounted(){
      window.addEventListener('resize',this.tellMediaType);
    },
  methods: {
    tellMediaType(){
      this.$store.commit("tellMediaType")
    }
  }
}
</script>


