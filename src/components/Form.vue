<template>
    <div>
        <el-form :form="form">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="生日">
                <el-input v-model="form.birthday"></el-input>
            </el-form-item>
            <el-button type="primary" @click="save">保存</el-button>
            <el-button type="primary" @click="back">返回</el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                birthday: ''
            }
        }
    },
    methods: {
        save() {
            console.info(this.form)
        },
        back() {
            this.$router.push('/table')
        }
    }
}
</script>

