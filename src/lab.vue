<template>
    <div id="app-lab">
        <div class="row">
            <div class="col-sm text-center">
                <img src="./assets/lab200.png" id="mainLogo">
                <h1 id="mainTitle">{{ title }} <small class="text-muted"> {{ subtitle }} </small></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <ul>
                    <li><h4><router-link to="/lab/deutscheSprache" class="nav-item nav-link">Deutsche Sprache</router-link></h4></li>
                    <li><h4><router-link to="/lab/arithmeticus" class="nav-item nav-link">Arithmeticus</router-link></h4></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app-lab',
    data () {
        return {
            title: 'The Lab!',
            subtitle: 'Where the madness happens'
        }
    }
}
</script>

<style lang="scss">

</style>
