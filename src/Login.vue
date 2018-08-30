<template>
    <div>
        <el-form :model="form">
            <el-form-item>
                <el-input type="text" v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click.native="login">登录</el-button>
    </div>
</template>
<script>
import { requestLogin } from './api/login'
export default {
    data() {
        return {
            form: {
                userName: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            requestLogin({ userName: this.form.userName, password: this.form.password })
                .then(response => {
                    alert(response)
                    return
                })
        }
    }
}
</script>
<style scoped>
</style>


