<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/table">列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/form">表单</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                选项1
              </el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <!-- <el-menu index="1">
          <el-menu-item-group index="2">
            <el-menu-item index="3">
              <template>
                <router-link to="/table">列表</router-link>
              </template>
              <el-submenu index="4">
                列表一
              </el-submenu>
            </el-menu-item>
            <el-menu-item index="5">
              <router-link to="/hello">Hello</router-link>
              <el-submenu index="6">
                列表二
              </el-submenu>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu> -->
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          我是一个导航栏
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
