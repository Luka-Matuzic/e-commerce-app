import { firebaseAction } from 'vuexfire'

const state = {
    orders: []
}
    
const getters = {
    getOrders: state => state.orders,
    numberOfOrders: state => state.orders.length
}
    
const mutations = {
    addOrder: (state, orders) => state.orders.push(orders)
}
    
const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef}, { ref }) => {
        // this will unbind any previously bound ref to 'todos'
        bindFirebaseRef('orders', ref)
    })
}
    
export default {
    state, 
    mutations,
    getters,
    actions
}