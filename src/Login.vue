<template>
    <div style="position:relative;">
        <touch-ripple :center-ripple="false">
            <el-form :model="form" class="login-form" label-position="left" label-width="0px">
                <h3 class="title">系统登录</h3>
                <el-form-item>
                    <el-input type="text" v-model="form.userName"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%" @click.native="login">登录</el-button>
                </el-form-item>
            </el-form>
        </touch-ripple>
    </div>
</template>
<script>
import { requestLogin } from './api/login'
import TouchRipple from './components/ripple/TouchRipple'
export default {
    data() {
        return {
            form: {
                userName: '',
                password: ''
            }
        }
    },
    components: {
        TouchRipple
    },
    methods: {
        login() {
            requestLogin({ userName: this.form.userName, password: this.form.password })
                .then(response => {
                    if (response.code === 200) {
                        localStorage.setItem('user', response.user)
                        this.$router.push({ path: '/table' })
                    } else {
                        this.$notify({
                            title: '错误',
                            message: response.msg,
                            type: 'error'
                        })
                    }
                })
        }
    }
}
</script>
<style scoped>
.login-form {
  width: 360px;
  background-color: whitesmoke;
  padding: 30px;
  margin-left: 400px;
  margin-top: 160px;
}
.title {
  margin-bottom: 40px;
  color: #505458;
}
</style>


