import Vue from 'vue'
import Vuex from 'vuex'
import cadreListInfo from "./mudules/cadre-list-info";
import getters from "./getters";

Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
        cadreListInfo
    },
    getters
})

export default store
