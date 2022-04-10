<template>
    <div id="UserHomeHeader">
        <div id="pcHeader" v-if="$store.state.mediaType.mediaType == 'pc'">
            <div id="header-left" class="header-container-item">
                <div id="guide-button" class="header-left-item"><button>guide</button></div>
                <div id="app-logo-button" class="header-left-item"><img src="favicon.ico" alt="logo"></div>
                

            </div>
            <div id="header-center" class="header-container-item">
                <div id="search-box" class="header-center-item"><input type="text"></div>
                <div id="search-button" class="header-center-item"><button>search</button></div>
            </div>
            <div id="header-right" class="header-container-item">
                <div id="options-button" class="header-right-item"><button>option</button></div>
                <div id="my-user-icon" class="header-right-item">
                    <!-- <img width="30" height="30" src="usericon.jpg" alt="user icon"> -->
                    <button>user</button>
                </div>
            </div>

        </div>
        <div id="mobileHeader" v-if="$store.state.mediaType.mediaType == 'mobile'">
            <div class="nosearch-container mobileHeader" v-if="searchMode == false">
                <div id="header-left" class="header-container-item">
                    <div id="guide-button" class="header-left-item"><button>guide</button></div>
                    <div id="app-logo-button" class="header-left-item"><img src="favicon.ico" alt="logo"></div>
                </div>


                <div id="header-right" class="header-container-item">
                    <div id="search-button" class="header-center-item"><button v-on:click="searchMode = true">search</button></div>
                    <div id="options-button" class="header-right-item"><button>option</button></div>
                    <div id="my-user-icon" class="header-right-item">
                    <!-- <img width="30" height="30" src="usericon.jpg" alt="user icon"> -->
                        <button>user</button>
                    </div>
                </div>
            </div>
            <!-- 高さも0にして消す -->
            <div class="search-container mobileHeader" v-if="searchMode == true">
                <div id="search-back-backbutton" class="header-left-item"><button v-on:click="searchMode = false">back</button></div>
                <div id="search-box" class="header-center-item"><input type="text"></div>
            </div>
            
        </div>
        <p>medtype:{{$store.state.mediaType.mediaType}}</p>
    </div>
    
    
    

</template>

<script>

export default {    
    name: 'UserHomeHeader',
    data(){
      return{
        searchMode: false
      };
    }
}
</script>

<style scoped>
.UserHomeHeader{
    margin: 200px;
    padding: 0%;
    background: #000;
}

.mobileHeader{
    background-color: aquamarine;
    display: flex;
    width: 100%;
    padding-top: 7px;
    padding-bottom: 7px;
    margin:0px;

}
#pcHeader{
    background-color: aquamarine;
    display: flex;
    width: 100%;
    padding-top: 7px;
    padding-bottom: 7px;
    margin:0px;
}

.header-container-item{
    display: inline-block;
    margin :auto;
    width: 33%;
    
}
#header-left{

    background-color: beige;
    margin-left: 7px;
    text-align: left

}

.header-left-item{
    display: inline;
    text-align: left;
    background-color: blue;
    ;
    
}
#header-center{
    text-align: center;
    background-color: beige;
}
.header-center-item{
    display: inline;
    text-align: center;
}

#header-right{
    margin-left: auto;
    text-align: right;
    margin-right: 7px;
    background-color: beige;
    /* width: 300px; */
}
.header-right-item{
    display: inline;
    
    background-color: blue;
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

</style>
