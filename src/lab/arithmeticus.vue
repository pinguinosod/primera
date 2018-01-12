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
                <input id="result" v-model="result" v-on:keyup.13="checkResult" v-bind:disabled="responseText != ''" v-autofocus>
            </div>
            <div class="col-12"></div> <!-- line break -->
            <div class="col-sm text-center font-weight-bold">
                <span id="response" v-bind:class="{ 'text-success':response, 'text-danger':!response }">{{ responseText }}</span>
            </div>
            <div class="col-12"></div> <!-- line break -->
            <div class="col-sm"><p class="text-muted text-center">Write your answer and press Enter.</p></div>
            <div class="col-12"></div> <!-- line break -->
            <div class="col-12 text-center font-weight-bold text-success">Corrects: {{ corrects }} </div>
            <div class="col-12 text-center font-weight-bold text-danger">Wrongs: {{ wrongs }} </div>
            </div>
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
            num1: 0,
            num2: 0,
            operation: 0,
            operations: {
                0:'+',
                1:'-',
                2:'*'
            },
            result: '',
            response: false,
            responseText: '',
            corrects:0,
            wrongs:0
        }
    },
    mounted:function() {
        this.restart();
    },
    methods: {
        checkResult: function() {
            if (this.responseText == '') {
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
            
                if (this.response) {
                    this.responseText = 'Correct!';
                    this.corrects++;
                }
                else {
                    this.responseText = 'Wrong!';
                    this.wrongs++;
                }
                var self = this;
                setTimeout(function() {
                    self.restart();
                }, 750);
            }
        },
        restart: function() {
            this.operation = Math.ceil(Math.random()*3)-1;
            if (this.operation == 2) {
                this.num1 = Math.ceil(Math.random()*12);
                this.num2 = Math.ceil(Math.random()*12);
            }
            else {
                this.num1 = Math.ceil(Math.random()*99);
                this.num2 = Math.ceil(Math.random()*99);
            }
            this.result = '';
            this.responseText = '';
        }
    },
    directives: {
      autofocus: {
        // directive definition
        inserted: function (el) {
          el.focus()
        }
      }
    }
}
</script>

<style scoped lang="scss">
#result {
    width: 40px;
}
#response {
    height: 35px;
    display: block;
}
</style>
