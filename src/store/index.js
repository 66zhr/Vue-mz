import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import movielist from "./movielist"
export default new Vuex.Store({
	modules:{
		movielist
    }
})