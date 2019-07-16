import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu.js'
import orders from './modules/orders.js'
import users from './modules/users.js'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    mutations: {
        ...firebaseMutations
    },
    modules: {
        menu, 
        orders,
        users
    }
})