<template>
    <div>
        <div>
            <el-button type="primary" style="float:right" @click="add">新增</el-button>
        </div>
        <el-table :data="list">
            <el-table-column prop="name" label="姓名"> </el-table-column>
            <el-table-column prop="birthday" label="生日"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    id: '1',
                    name: '张三',
                    birthday: '2001-01-01'
                },
                {
                    id: '2',
                    name: '李四',
                    birthday: '2001-01-01'
                },
                {
                    id: '2',
                    name: '王五',
                    birthday: '2001-01-01'
                }
            ]
        }
    },
    methods: {
        add() {
            this.$router.push('/form')
        }
    }
}
</script>

