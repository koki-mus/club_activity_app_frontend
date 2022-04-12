<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">login</router-link>
    </nav>
    <router-view class="margin0" />

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


</style>

<script>
export default {
    name: "app",
    created: function() {
      this.tellMediaType();
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


