<template>
    <div class="container-fluid p-0" id="app">
        <Header />
        <router-view></router-view>
    </div>
</template>


<script>
import Header from './components/Header'
import { dbMenuRef, dbOrdersRef } from '../firebaseConfig.js'


export default {
  name: 'app',
  components: {
    Header
  },
  created() {
    this.$store.dispatch('setMenuRef', dbMenuRef)
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }
}
</script>


<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  header {
    background: #eceeef;
    padding: 40px 0;
    font-size: 1.2 em;
  }
  .card {
    background-color: #69ab64;
    margin: 20px 0;
    border-radius: 0;
  }
</style>
