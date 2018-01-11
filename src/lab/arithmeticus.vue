<template>
    <div id="app-arithmeticus">
        <div class="row">
            <div class="col-sm text-center">
                <img src="../assets/addingUp200.png" id="mainLogo">
                <h1 id="mainTitle">{{ title }} <small class="text-muted"> {{ subtitle }} </small></h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm text-center">
                {{ num1 }} {{ operations[operation] }} {{ num2 }} = 
                <input id="result" v-model="result" v-on:keyup.13="checkResult" autofocus>
            </div>
            <div class="col-12"></div> <!-- line break -->
            <div class="col-sm text-center">
                <span id="response" v-bind:class="{ 'text-success':response, 'text-danger':!response }">{{ responseText }}</span>
            </div>
            <div class="col-12"></div> <!-- line break -->
            <div class="col-sm"><p class="text-muted text-center">Write your answer and press Enter.</p></div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'app-arithmeticus',
    data () {
        return {
            title: 'Arithmeticus!',
            subtitle: 'Do you even math?',
            num1: Math.ceil(Math.random()*10),
            num2: Math.ceil(Math.random()*10),
            operation: Math.ceil(Math.random()*3)-1,
            operations: {
                0:'+',
                1:'-',
                2:'*'
            },
            result: '',
            response: false,
            responseText: ''
        }
    },
    methods: {
        checkResult: function() {
            var num1 = parseInt(this.num1);
            var num2 = parseInt(this.num2);
            var result = parseInt(this.result);
            
            switch (parseInt(this.operation)) {
                default:
                case 0:
                    this.response = (num1 + num2) == result;
                break;
                case 1:
                    this.response = (num1 - num2) == result;
                break;
                case 2:
                    this.response = (num1 * num2) == result;
                break;
            }
            
            if (this.response) this.responseText = 'Correct!';
            else this.responseText = 'Wrong!';
            
            var self = this;
            setTimeout(function() {
                self.restart();
            }, 2000);
        },
        restart: function() {
            this.num1 = Math.ceil(Math.random()*10),
            this.num2 = Math.ceil(Math.random()*10),
            this.operation = Math.ceil(Math.random()*3)-1,
            this.result = '',
            this.responseText = ''
        }
    }
}
</script>

<style scoped lang="scss">
#result {
    width: 30px;
}
#response {
    height: 35px;
    display: block;
}
</style>
