<template>
    <div id="app-nav">
        <nav class="navbar navbar-toggleable navbar-expand-sm navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <router-link to="/" class="navbar-brand mr-auto ml-auto"><img src="./assets/logo32.png"><span class="d-none d-sm-inline-block"> Primera</span></router-link>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <div class="navbar-nav">
                    <router-link to="/lab" class="nav-item nav-link">The Lab</router-link>
                    <router-link to="/hello-world" class="nav-item nav-link">Hello World</router-link>
                    <router-link to="/pinguinosod" class="nav-item nav-link">PinguinoSod</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'app-nav',
    data () {
        return {}
    }
}
</script>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap-grid.scss";
    
    @include media-breakpoint-down(xs) {
        .navbar-brand img {
            left: -25px;
        }
    }
    
    .navbar-brand img {
        position: relative;
        top: -2px;
    }
    .navbar-brand span {
        margin-left: 3px;
    }
</style>
