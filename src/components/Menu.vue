<template>
    <div class="container-fluid menu-div">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <table class="table">
                        <thead class="thead">
                            <tr>
                                <th scope="col">Naziv</th>
                                <th scope="col">Cijena</th>
                                <th scope="col">Dodaj</th>
                            </tr>
                        </thead>

                        <tbody v-for="item in getMenuItems" :key="item['.key']">
                            <tr>
                                <th>{{item.name}}</th>
                            </tr>

                            <tr>
                                <td class="item-description">{{item.description}}</td>
                            </tr>

                            <tr v-for="option in item.options" :key="option['.key']">
                                <td>{{option.size}}</td>
                                <td>{{option.price}} kn</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-dark" @click="addToBasket(item, option)"> 
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>


            <!-- SHOPPING BASKET -->
            <div class="col-sm-12 col-md-6">
                <div v-if="basket.length > 0">
                    <table class="table">
                            <thead class="thead">
                                <tr>
                                    <th scope="col">Količina</th>
                                    <th scope="col">Proizvod</th>
                                    <th scope="col">Ukupno</th>
                                </tr>
                            </thead>

                            <tbody v-for="item in basket" :key="item.id">
                                <tr>
                                    <td>
                                        <button class="btn btn-sm" type="button" @click="decreaseQuantity(item)"> - </button> 
                                        <span> {{ item.quantity }} </span> 
                                        <button class="btn btn-sm" type="button" @click="increaseQuantity(item)"> + </button>
                                    </td>
                                    
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.price * item.quantity}} kn</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>Total: {{ total }} kn</p>
                        <button class="btn btn-success btn-block" @click="addNewOrder">Naruči!</button>
                </div>
                <div v-else>
                    <p>{{ basketText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import { dbOrdersRef } from '../../firebaseConfig.js'


export default {
    data () {
        return {
            options: '',   
            basket: [],
            basketText: 'Vaša košarica je prazna.'
        }
    },
    computed: {
        ...mapGetters([
            'getMenuItems'
        ]),
        total() {
            let totalCost = 0;
            for(let items in this.basket) {
                let individualItem = this.basket[items];
                totalCost += individualItem.quantity * individualItem.price;
            }
            return totalCost;
        }
    },
    methods: {
        addToBasket(item, option){
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            })
        },
        increaseQuantity(item){
            item.quantity++;
        },
        decreaseQuantity(item){
            item.quantity--;
            if(item.quantity === 0){
                this.removeFromBasket(item);
            }
        },
        removeFromBasket(item){
            this.basket.splice(this.basket.indexOf(item), 1);
        },
        addNewOrder(){
            dbOrdersRef.push(this.basket)
            this.basket = []
            this.basketText = "Hvala Vam, Vaša narudžba je zaprimljena!"
        }
    }
}
</script>


<style  scoped>
.menu-div {
    margin-top: 1em;
}

.item-description {
    font-style: italic;
}

.btn-block{
    background-color: #419b76;
}

.btn-block:hover {
    background-color: #FA9608;
    color: black;
}

.btn-sm{
    color: black;
}

.btn-sm:hover{
     background-color: #FA9608;
}
</style>
