<template>
    <el-image :src="src" :fit="fit" :lazy="lazy" class="rounded-md w-full h-full">
        <template slot="placeholder">
            <img src="@/assets/images/default.jpg" class="rounded-md w-full h-full">
        </template>
        <template slot="error">
            <img src="@/assets/images/default.jpg" class="rounded-md w-full h-full">
        </template>
    </el-image>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        fit: {
            type: String,
            default: 'cover'
        },
       lazy: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>