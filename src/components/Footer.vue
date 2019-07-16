<template>
    <div class="container-fluid footer">
        <div class="row">
            <div class="col-4">
                <router-link :to="{name: 'homeLink'}"><a class="nav-item nav-link">Home</a></router-link>
            </div>

            <div class="col-4">
                <router-link :to="{name: 'aboutLink'}"><a class="nav-item nav-link">About</a></router-link>
            </div>

            <div class="col-4">
                <router-link :to="{name: 'adminLink'}"><a class="nav-item nav-link">Admin</a></router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .footer {
        background: rgb(62, 50, 50);
        text-align: center;
        margin-top: 16em;
    }
</style>
