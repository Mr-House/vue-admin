<template>
    <div>
        <el-container style="height: 620px; border: 1px solid #eee">
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
            </el-aside>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    我是一个导航栏
                </el-header>
                <el-main style="background-color:white">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
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
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
a:link {
  text-decoration: none;
}
</style>
