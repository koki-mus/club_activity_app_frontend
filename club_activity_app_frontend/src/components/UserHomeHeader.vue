<template>
    <div id="UserHomeHeader">
        <div id="headerFiller"></div>
        <div id="pcHeader" class="header" v-if="$store.state.mediaType.mediaType == 'pc'">
            <div id="header-left" class="header-container-item">
                <div id="guide-button" class="header-left-item"><button>guide</button></div>
                <div id="app-logo-button" class="header-left-item"><router-link to="/"><img  src="favicon.ico" alt="logo" height="33px"></router-link></div>

            </div>
            <div id="header-center" class="header-container-item">
                <div id="search-box" class="header-center-item"><input type="text" placeholder="検索"></div>
                <div id="search-button" class="header-center-item"><img height="25px" src="@/assets/searchbutton.png" alt=""></div>
            </div>
            <div id="header-right" class="header-container-item">
                
                <div id="my-user-icon" class="header-right-item">
                    <UserHomeHeaderMenu />
                    <!-- <img width="30" height="30" src="usericon.jpg" alt="user icon"> -->
                </div>
            </div>

        </div>
<!-- --------------------------------------------------------------------- -->
        <div id="mobileHeader" class="header" v-if="$store.state.mediaType.mediaType == 'mobile'">
            <div class="nosearch-container mobileHeader" v-if="searchMode == false">
                <div id="header-left" class="header-container-item">
                    <div id="guide-button" class="header-left-item"><button>guide</button></div>
                    <div id="app-logo-button" class="header-left-item"><router-link><img src="favicon.ico" alt="logo"></router-link></div>
                </div>


                <div id="header-right" class="header-container-item">
                    <div id="search-button" class="header-center-item"><img height="25px" v-on:click="searchMode = true" src="@/assets/searchbutton.png" alt=""></div>

                    <div id="my-user-icon" class="header-right-item">
                    <!-- <img width="30" height="30" src="usericon.jpg" alt="user icon"> -->
                        <UserHomeHeaderMenu />
                    </div>
                </div>
            </div>
            <!-- 高さも0にして消す -->
            <div class="search-container mobileHeader" v-if="searchMode == true">
                <div id="search-back-backbutton" class="header-left-item search-container-item"><button v-on:click="searchMode = false">back</button></div>
                <div id="search-box" class="header-center-item search-container-item"><input type="text"></div>
            </div>
            
        </div>
        <p>medtype:{{$store.state.mediaType.mediaType}}</p>
    </div>
    
    
    

</template>

<script>
import UserHomeHeaderMenu from '@/components/UserHomeHeaderMenu'
export default {    
    name: 'UserHomeHeader',
    data(){
      return{
        searchMode: false
      };
    },
    components:{
        UserHomeHeaderMenu
    }
}
</script>

<style scoped>
#headerFiller{
    height:37px
}
.UserHomeHeader{
    margin: 200px;
    padding: 0%;
    height: 3000px;

}
.header{
    background: #ffffff;
    border:10px;
    box-shadow: 0px 3px 3px;
    background: #388;
    position: fixed;
    top: 0%;
    height: 40px;
    width: 100%;
    
}
#mobileHeader{
    height: 40px;
}
.mobileHeader{
    display: flex;
    width: 100%;
    padding-top: 7px;
    padding-bottom: 7px;
    margin:0px;

}
#pcHeader{
    display: flex;
    width: 100%;
    padding-top: 7px;
    padding-bottom: 7px;
    margin:0px;
}

.header-container-item{
    display: block;
    margin :auto;
   
}
#search-button{
    width: 80px;
}
#header-left{
    margin-left: 7px;
    margin-top: 0px;
}

.header-left-item{
    display: inline;
    text-align: left;
    margin-top: 0px;
    height:auto;
    
}
#header-center{
    text-align: center;
}
.header-center-item{
    display: inline;
    text-align: center;
}

#header-right{
    margin-left: auto;
    text-align: right;
    margin-right: 7px;

    /* width: 300px; */
}
.header-right-item{
    display: inline;
    text-align: right;
    width: 30px;
}
/* mobile */
#mobileHeader .header-container-item{
    width:auto
}
#mobileHeader #header-left{
 width:auto
}

#mobileHeader .header-left-item{

    
}
#mobileHeader #header-center{

}
#mobileHeader .header-center-item{

}

#mobileHeader #header-right{

}
#mobileHeader .header-right-item{

}
.search-conteiner{
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    width: 100%;
}
.search-container-item{
    display: inline-block;
    text-align: center;
}
#search-back-backbutton{
    width: 40px;
    margin-left: 7px;
}
#search-box{
    width: 80%;
    margin-right:7px;
}

.mobileHeader #header-right #search-button{
    position:relative;
    top: -2px;
    padding-right: 15px;

}
 
</style>
