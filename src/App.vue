<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/login"></router-link>
  </div>
</template>
<script>
export default {
  created() {
    this.$router.replace('/login')
  },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0px;
  padding: 0px;
  background: #1f2d3d;
  font-size: 14px
}
</style>


