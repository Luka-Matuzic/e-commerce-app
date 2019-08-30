<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div>
                    <p v-if="!currentUser">Molimo prijavite se za nastavak u administracijsku sekciju.</p>
                    <p class="logged-in" v-else>Ulogirani ste kao <strong>{{ currentUser }}</strong> </p>
                </div>

                <form>
                    <div class="form-group">
                        <label> E-mail: </label>
                        <input type="email" class="form-control" id="email">
                    </div>

                    <div class="form-group">
                        <label> Lozinka: </label>
                        <input type="password" class="form-control" id="password">
                    </div>

                    <button type="button" class="btn btn-primary" @click.prevent="signIn"> Prijava </button>
                    <button type="button" class="btn btn-danger"  @click.prevent="signOut"> Odjava </button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import Firebase from 'firebase';
import { store } from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user){
    if (user) {
        store.dispatch('setUser', user)
    }
    else {
        store.dispatch('setUser', null)
    }
})

export default {
    methods: {
        signIn() {
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;

            Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                let errorCode = error.code;
                let errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('Pogrešna lozinka, pokušajte ponovno.')
                }
                else {
                    alert (errorMessage);
                }
            });
        },
        signOut() {
            Firebase.auth().signOut().then(function (){
                alert ('Odjavljeni ste.')
            }).catch(function(error){
                alert (error)
            })
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser
        }
    }
}
</script>

<style scoped>
    form {
        margin: 40px 0;
    }

    .btn-primary {
        margin-right: 1em;
    }  

    .container {
        padding: 5em 0;
    }  
</style>