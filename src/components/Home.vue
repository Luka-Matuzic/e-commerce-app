<template>
        <div>
            <div id="bg"></div>
            <main>
                <section id="card"></section>
               
                <section id="primary">
                    <h1>Grill Bill</h1>
                    <h3>Okusi se ne rađaju nego stvaraju.</h3>
                    <button class="btn btn-lg" @click="goToMenu">Naruči!</button>
                </section>
            </main>
        </div>
</template>


<script>
export default {
    methods: {
        goToMenu() {
            this.$router.push({name: 'menuLink'});    
        }
    }
}
</script>


<style scoped>
.btn {
  margin: 1em 0;
  background-color: #FA9608;
  color: #231E1E;
  border: none;
  font-weight: bolder; 
}

.btn:hover {
  background-color: #419b76;
  color: #fff;
}
    
body, html {
  height: 100%;
}

body {
  font-family: 'Montserrat';
  margin: 0;
}

body #bg {
  -webkit-clip-path: polygon(100% 0, 100% 82%, 45% 100%, 0 100%, 0 0);
          clip-path: polygon(100% 0, 100% 82%, 45% 100%, 0 100%, 0 0);
  background-color: #231E1E;
  width: 100%;
  height: 85.5%;
  position: absolute;
  z-index: -1;
}


body header a {
  color: #fff;
  text-decoration: none;
  padding: 15px;
  display: block;
  text-transform: uppercase;
}

main section#card {
  background: url('../assets/home-img.jpg');
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 200px;
  border-radius: 100px;
  margin: 0 auto;
  width: 80%;
  border: 1px solid #fff;
}


main section#primary {
  color: #fff;
  padding: 15px;
  text-align: center;
  padding-top: 100px;
}

main section#primary h1 {
  font-size: 4em;
  text-transform: uppercase;
  color: #FA9608;
}

main section#primary p {
  font-size: 1.4em;
}


/*queries*/
/*min-width: 840px*/
/*------------------------------------------------------------------------------------------------------*/
@media (min-width: 840px) {
  body #bg {
    -webkit-clip-path: polygon(0 0, 75% 0, 35% 100%, 0 100%);
            clip-path: polygon(0 0, 100% 0, 35% 100%, 0 100%);
    height: 89.7%;
  }

  main {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 50% auto;
        grid-template-columns: 50% auto;
        grid-template-areas: "primary card";
  }

  main section#card {
    grid-area: card;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    margin-top: 6em;
  }
}

@media (min-width: 840px) {
  main section#primary {
    grid-area: primary;
    text-align: left;
    margin: 4em 0 0 4em;
  }
}

/*max-width: 840px*/
/*------------------------------------------------------------------------------------------------------------*/
@media (max-width: 840px) {
body #bg {
    background-color: #231E1E;
    width: 100%;
    height: 89.7%;
    position: absolute;
    z-index: -1;
  }

  main section#primary {
    color: #fff;
    padding: 15px;
    text-align: center;
    margin-top: 10px;
  }

   main section#card {
    grid-area: card;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    padding-top: 100px;
  }
}

</style>
