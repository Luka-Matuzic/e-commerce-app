<template>
    <div class="new-product">
        <form>
            <h3 >Dodaj novi proizvod: </h3>
            <hr class="new-product-underline">

            <div class="form-group row">
                <label class="col-sm-3"> Naziv: </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="newProduct.name">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3"> Opis: </label>
                <div class="col-sm-9">
                    <textarea type="text" class="form-control" rows="5" v-model="newProduct.description"></textarea>
                </div>
            </div>

            <p><strong> Opcija 1: </strong></p>
            <div class="form-group row">
                <label class="col-sm-3"> Veličina: </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="newProduct.options[0].size">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3"> Cijena: </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="newProduct.options[0].price">
                </div>
            </div>

            <p><strong> Opcija 2: </strong></p>
            <div class="form-group row">
                <label class="col-sm-3"> Veličina: </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="newProduct.options[1].size">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3"> Cijena: </label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" v-model="newProduct.options[1].price">
                </div>
            </div>

            <div class="form-group row">
                <button type="button" class="btn btn-success btn-block" @click="addMenuItem"> Dodaj </button>
            </div>
        </form>
    </div>
</template>


<script>
import { dbMenuRef } from '../../firebaseConfig.js';


export default {
    data() {
        return {
            newProduct: {
                 'name': '',
                    'description': '',
                    'options': [
                        {
                        'size': '',
                        'price': ''
                        }, {
                        'size': '',
                        'price': ''
                        }
                    ]
            }
        }
    },
    methods: {
        addMenuItem() {
            dbMenuRef.push(this.newProduct);
        }
    }
}
</script>


<style scoped>
.new-product {
    padding-top: 2.5em;
    padding-bottom: 5em;
}

.new-product-underline {
    padding-bottom: 1em;
}
</style>
