<template>
    <div id="app-view">
        <app-nav></app-nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import nav from './nav.vue'

export default {
    name: 'app-view',
    components: {
        'app-nav': nav
    },
    data () {
        return {}
    }
}
</script>
