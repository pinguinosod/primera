<template>
    <div id="app-pinguinosod">
        <div class="row">
            <div class="col-sm text-center">
                <img src="./assets/pinguinosod200.png" id="mainLogo">
                <h1 id="mainTitle">{{ title }} <small class="text-muted"> {{ subtitle }} </small></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm text-center">
                <p>Hello, my name is David. I live and work in Iquique, Chile.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-pinguinosod',
    data () {
        return {
            title: 'PinguinoSod',
            subtitle: 'The one who codes'
        }
    }
}
</script>

<style scoped lang="scss">
// bootstrap-custom.scss

// Your variable overrides
$primary: #60b0f4;

// Bootstrap and its default variables
@import "node_modules/bootstrap/scss/bootstrap";

</style>