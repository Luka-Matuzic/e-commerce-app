<template>
    <div class="container-fluid">
        <img class="logo" src="../assets/logo.png" alt="logo">
        <div class="container about-us-div">
            <p class="about-us-info">Misija restorana Grill Bill je s ljubavlju raditi vrhunsku hranu isključivo od najboljih domaćih sastojaka, te na taj način biti neizostavni dio 
                prijateljskih druženja.
                <br>
                Želimo stvarati dugoročne odnose te na aktivan način pozitivno utjecati na zajednicu u kojoj djelujemo.
            </p>
        </div>

        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" >
                            <router-link :to="{name: 'historyLink'}"><a class="nav-item nav-link">Povijest</a></router-link>
                        </button>
                    </h2>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat eveniet quis eius voluptates amet optio minus nulla mollitia, 
            dolorem alias ad vitae nam placeat quod dignissimos cumque quibusdam ex.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis corrupti, necessitatibus temporibus eum excepturi incidunt a aut voluptate dolorem rem in, deleniti ipsum amet ea sequi cumque autem dignissimos.</p>
                    </div>
                </div>
            </div>


            <div class="card">
                <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button">
                            <router-link :to="{name: 'deliveryLink'}"><a class="nav-item nav-link">Naručivanje</a></router-link>
                        </button>
                    </h2>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat eveniet quis eius voluptates amet optio minus nulla mollitia, 
            dolorem alias ad vitae nam placeat quod dignissimos cumque quibusdam ex.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis corrupti, necessitatibus temporibus eum excepturi incidunt a aut voluptate dolorem rem in, deleniti ipsum amet ea sequi cumque autem dignissimos.</p>
                    </div>
                </div>
            </div>


            <div class="card">
                <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button">
                            <router-link :to="{name: 'deliveryLink'}"><a class="nav-item nav-link">Dostava</a></router-link>
                        </button>
                    </h2>
                </div>

                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat eveniet quis eius voluptates amet optio minus nulla mollitia, 
            dolorem alias ad vitae nam placeat quod dignissimos cumque quibusdam ex.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debitis corrupti, necessitatibus temporibus eum excepturi incidunt a aut voluptate dolorem rem in, deleniti ipsum amet ea sequi cumque autem dignissimos.</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<style scoped>
.container-fluid{
    background-color: #231E1E;
    height: 100vh;
}

.logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 3em 1em 1em 1em;
}

.about-us-div{
    color: white;
    margin-top: 2em;
    margin-bottom: 3em;
}


.navbar-nav .nav-link:hover {
    color: #419b76;
}

.about-us-info{
    text-align: center;
}

div#headingOne.card-header:hover, div#headingThree.card-header:hover {
    cursor: pointer;
    background: rgb(255,157,18);
    background: linear-gradient(90deg, rgba(255,157,18,1) 0%, rgba(65,155,118,1) 100%);
}

div#headingTwo.card-header:hover {
    cursor: pointer;
    background: rgb(255,157,18);
    background: linear-gradient(90deg, rgba(255,157,18,1) 0%, rgba(65,155,118,1) 100%);
}

a.nav-item.nav-link {
    color: black;
    text-decoration: none;
}


a:hover {
    color: black;
    text-decoration: none;
}


@media screen and (min-width: 700px) {
    .card {
        text-align: center;
        margin: 0 auto; 
        float: none; 
        width: 70%;
    }
}

@media screen and (max-width: 700px) {
    .card {
        text-align: center;
        margin: 0 auto; 
        float: none; 
        width: 100%;
    }
}

</style>
