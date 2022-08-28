/*
 * @Author: cully fung
 * @Date: 2021-06-14 12:25:01
 * @LastEditTime: 2022-08-29 00:00:14
 * @LastEditors: cully fung
 * @Description:
 */
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
