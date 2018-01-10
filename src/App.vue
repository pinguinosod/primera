<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Primera',
      message: 'Made by PinguinoSod'
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/bootstrap-custom.scss';

#mainLogo {
    margin-top:24px;
}
#mainTitle {
    margin-top:24px;
    margin-bottom:24px;
}
</style>
