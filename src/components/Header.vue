<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
          <router-link :to="{name: 'homeLink'}" tag="li"> <a class="navbar-brand" href="#"><img class="logo" src="../assets/logo.png" alt="logo"></a></router-link>          

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="icon-bar"></div>
                <div class="icon-bar"></div>
                <div class="icon-bar"></div>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link :to="{name: 'homeLink'}" tag="li"><a class="nav-item nav-link">Home</a></router-link>
                    <router-link :to="{name: 'menuLink'}" tag="li"><a class="nav-item nav-link">Menu</a></router-link>
                    <router-link :to="{name: 'aboutLink'}" tag="li"><a class="nav-item nav-link">O nama</a></router-link>
                    <router-link :to="{name: 'contactLink'}" tag="li"><a class="nav-item nav-link">Kontakt</a></router-link>
                </div>
                
                <div class="navbar-nav ml-auto">
                   <router-link :to="{name: 'adminLink'}" tag="li"><a class="nav-item nav-link"> <button class="btn">Admin</button></a></router-link>
                </div>
            </div>
        </nav>  
    </div>
</template>




<style scoped>
.navbar-custom {
    background-color: #231E1E !important;
}

.logo {
    width: 50px;
    height: 50px;
}

.navbar-light .navbar-nav .nav-link {
    color: #fff;
    text-align: center;
}

.navbar-light .navbar-nav .nav-link:active {
     color: rgb(96, 201, 197);
}

.navbar-light .navbar-nav .nav-link:hover {
    color: rgb(96, 201, 197);
}

.icon-bar {
  width: 35px;
  height: 3.5px;
  background-color: #419b76;
  margin: 6px 0;
}

.btn {
    background-color: #419b76;
    color: #fff;
    border: none;
    font-weight: bolder; 
}

.btn:hover {
    background-color: #FA9608;
    color: #231E1E;
}

@media only screen and (max-width: 991px) {
    .navbar-custom {
        padding: 1.5em 1.5em;
    }
}
</style>
