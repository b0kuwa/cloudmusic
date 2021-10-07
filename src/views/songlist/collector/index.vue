<template>
    <div class="grid grid-cols-4">
        <div v-for="item in subscribers" :key="item.userId" class="flex items-center my-2">
            <m-image :src="item.avatarUrl" style="width: 75px;height: 75px;" class="mr-2 rounded-full"></m-image>
            <div class="userinfo text-sm">
                <span class="text-gray-800 hover:text-gray-900 cursor-pointer">{{ item.nickname }}</span>
                <p class="text-gray-600 text-xs">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        subscribers:{
            type:Array
        }
    },
}
</script>

<style lang="scss" scoped>

</style>