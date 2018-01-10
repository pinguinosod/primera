<template>
    <div id="app-content">
        <div class="row">
            <div class="col-sm text-center">
                <img src="./assets/logo200.png" id="mainLogo">
                <h1 id="mainTitle">{{ title }} <small class="text-muted"> {{ subtitle }} </small></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md">
                <dl>
                    <dt>What is this?</dt>
                    <dd>Primera is the first application developed by me using <a href="https://vuejs.org/">Vue.js</a>.</dd>
                </dl>
            </div>
            <div class="col-md">
                <dl>
                    <dt>Why should i care?</dt>
                    <dd>You shouldn't, unless you were me, then you should be very excited about this.</dd>
                </dl>
            </div>
            <div class="col-md">
                <dl>
                    <dt>Why Vue?</dt>
                    <dd>Because it seems easier than <a href="https://angular.io/">Angular</a>.</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-content',
    data () {
        return {
            title: 'Primera',
            subtitle: 'by PinguinoSod'
        }
    }
}
</script>


<style lang="scss">
</style>
