import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const account ={
    state: {
        userId: "",
        userToken: ""
    },
    mutations: {
        updateUser(state, user) {
            state.userId = user.userId;
            state.userToken = user.userToken;
        }
    },
    actions: {
        auth(context, user) {
            context.commit('updateUser', user);
        }
    }
    //getters:{}
}

const infoooo ={//類似ユーザとか入れる
    state: {
        hoge: ""
    }
}


const store = new Vuex.Store({
    modules: {
        account: account,
        infoooo: infoooo
    },
})

export default store
