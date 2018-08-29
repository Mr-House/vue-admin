<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary" @click="test_func">登陆</el-button>
    <span>{{test}}</span>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  mixins: [],
  components: {
    HelloWorld
  },
  data() {
    return {
      test: '1121'
    }
  },
  watch: {

  },
  computed: {

  },
  methods: {
    test_func() {
      alert(111)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
