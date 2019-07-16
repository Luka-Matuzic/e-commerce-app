<template>
    <div class="container-fluid">
        <section v-if="currentUser">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <NewProduct />
                </div>

                <div class="col-sm-12 col-md-6">
                    <h3 class="menu">Menu</h3>
                    <table class="table">
                        <thead>
                            <tr> 
                                <th scope="col">Proizvod</th>
                                <th scope="col">Izbaci iz jelovnika</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in getMenuItems" :key="item['.key']">
                            <tr>
                                <td>{{item.name}}</td>
                                <td><button class="btn btn-outline-danger btn-sm" @click="removeMenuItem(item['.key'])">x</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <h3 class="orders-title">Narudžbe: {{ numberOfOrders }}</h3>
                    <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']"> <!-- for petlja za loop kroz tablicu -->
                        <thead>
                             <div class="order-number">
                                <strong><em> Broj narudžbe: {{ index + 1 }} </em></strong> 
                                <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(orders['.key'])"> x </button>
                            </div>

                            <tr>
                                <th scope="col">Proizvod</th>
                                <th scope="col">Veličina</th>
                                <th scope="col">Količina</th>
                                <th scope="col">Cijena</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="orderItems in orders['.value']" :key="orderItems.id">
                                <td>{{ orderItems.name }}</td>
                                <td>{{ orderItems.size }}</td>
                                <td>{{ orderItems.quantity }}</td>
                                <td>{{ orderItems.price}} kn</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        
        <hr>
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                    <Login />
            </div>
        </div>
    </div>
</template>

<script>
import NewProduct from './NewProduct'
import Login from './Login'
import { mapGetters } from 'vuex'
import { dbMenuRef, dbOrdersRef } from '../../firebaseConfig';

export default {
    components: {
        NewProduct,
        Login
    },
    computed: {
        ...mapGetters ([
            'numberOfOrders',
            'getMenuItems',
            'getOrders',
            'currentUser'
        ])
    },
    methods: {
        removeMenuItem(key) {
            dbMenuRef.child(key).remove()
        },
        removeOrderItem(key) {
            dbOrdersRef.child(key).remove()
        }
    },
    beforeRouteLeave (to, from, next) {
        if(confirm("Jeste li se odjavili?") === true){
            next();
        }
        else {
            next(false);
        }
    }
}
</script>


<style>
    .order-number {
        margin: 10px 0;
    }

    .menu {
        padding-top: 1.5em;
    }

    .orders-title {
        padding-bottom: 1em;
    }
</style>
