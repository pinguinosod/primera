<template>
    <div id="app-deutscheSprache">
        <div class="row">
            <div class="col-sm text-center">
                <div id="mainLogo"></div>
                <h1 id="mainTitle">{{ title }} <small class="text-muted"> {{ subtitle }} </small></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-5">
                <h3></h3>
                <table class="table table-sm">
                    <thead>
                        <tr><th colspan="2"><h3>Die Zahlen</h3></th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="w-15">1</td> <td>Eins</td></tr>
                        <tr><td>2</td> <td>Zwei</td></tr>
                        <tr><td>3</td> <td>Drei</td></tr>
                        <tr><td>4</td> <td>Vier</td></tr>
                        <tr><td>5</td> <td>Fünf</td></tr>
                        <tr><td>6</td> <td>Sechs</td></tr>
                        <tr><td>7</td> <td>Sieben</td></tr>
                        <tr><td>8</td> <td>Acht</td></tr>
                        <tr><td>9</td> <td>Neun</td></tr>
                        <tr><td>10</td> <td>Zehn</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5">
                <table class="table table-sm">
                    <thead>
                        <tr><th colspan="2"><h3>Die Farben</h3></th></tr>
                    </thead>
                    <tbody>
                        <tr><td class="bg-color bg-red w-15"></td> <td>Rot</td></tr>
                        <tr><td class="bg-color bg-orange"></td> <td>Orange</td></tr>
                        <tr><td class="bg-color bg-yellow"></td> <td>Gelb</td></tr>
                        <tr><td class="bg-color bg-green"></td> <td>Grün</td></tr>
                        <tr><td class="bg-color bg-blue"></td> <td>Blau</td></tr>
                        <tr><td class="bg-color bg-purple"></td> <td>Lila</td></tr>
                        <tr><td class="bg-color bg-brown"></td> <td>Braun</td></tr>
                        <tr><td class="bg-color bg-black"></td> <td>Schwarz</td></tr>
                        <tr><td class="bg-color bg-white"></td> <td>Weiß</td></tr>
                        <tr><td class="bg-color bg-gray"></td> <td>Grau</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app-deutscheSprache',
    data () {
        return {
            title: 'Deutsche Sprache',
            subtitle: 'Die Suppe ist salzig!'
        }
    }
}
</script>

<style scoped lang="scss">
#mainLogo {
    margin-left:auto;
    margin-right:auto;
    max-width: 400px;
    height:195px;
    background-color:yellow;
}
#mainLogo::before {
    content:'';
    display: block;
    background-color:black;
    height:65px;
}
#mainLogo::after {
    content:'';
    display: block;
    background-color:red;
    height:65px;
}

.bg-red {
    background-color:red
}
.bg-orange {
    background-color:orange
}
.bg-yellow {
    background-color:yellow
}
.bg-green {
    background-color:green
}
.bg-blue {
    background-color:blue
}
.bg-purple {
    background-color:purple
}
.bg-brown {
    background-color:brown
}
.bg-black {
    background-color:black
}
.bg-white {
    background-color:white
}
.bg-gray {
    background-color:gray
}
</style>