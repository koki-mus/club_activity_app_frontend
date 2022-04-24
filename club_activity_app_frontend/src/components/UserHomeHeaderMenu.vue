<template>
  <div class="UserHomeHeaderMenu">
    <div class="menu">
      <label for="menu_bar"><img class="img-circle" src="@/assets/user_default_icon.jpg" width="30" height="30" alt="user"></label>
      <input type="checkbox" id="menu_bar" />
      <ul id="links">
        <li><p>{{ $store.state.account.userId }}</p></li>
        <li class="separation"><hr></li>
        <li><a href="">Link02</a></li>
        <li><router-link to="/UserRegisterdInfo">登録情報</router-link></li>
        <li class="separation"><hr></li>
        <li><p id="logout" v-on:click="logout">ログアウト</p></li>
      </ul>
    </div>
  </div>
</template>


    
<script>
import {logout} from '@/modules/module';
export default {
  name: "UserHomeHeaderMenu",
  methods: {
        logout: function() {
      logout()
    }
  },
  components:{

  }
};

</script>

<style scoped>
.UserHomeHeaderMenu{
  display: inline-block;
}
    .menu {
    max-width: 600px;

    
}

.menu a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #000;
    border: 1px #00f;
}

label {
    display: block;
    margin: 0 0 4px 0;
    padding : 1px;
    line-height: 1;
    color :#fff;
    cursor :pointer;
}

input {
    display: none;
}

.menu ul {
    margin: 0;
    padding: 0;
    background :#f4f4f4;
    list-style: none;
    position: absolute;
    right:20px;
    text-align: right;
    box-shadow: 2px 2px 4px;
}

.menu li {
    height: 0;

    overflow: hidden;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    
}

#menu_bar:checked ~ #links li{
    height:40px;
    opacity: 1;
    
}
#menu_bar:checked ~ #links .separation{
    height:10px;
}
hr{
  color: azure;
  width: 90%;
  size: 1;
}
#logout{
  cursor :pointer;
}
.img-circle{
    border-radius: 50%;
}
</style>