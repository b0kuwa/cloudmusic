<template>
    <div>
        <el-input type="textarea" :rows="3" placeholder="请输入评论或@朋友" v-model="comment" maxlength="140"></el-input>
        <!-- 精彩评论 -->
        <!-- 最新评论 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            comment: ''
        }
    }
}
</script>

<style scoped>

</style>