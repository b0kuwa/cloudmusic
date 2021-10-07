<template>
    <div class="grid grid-cols-4 gap-4">
        <router-link
            :to="{ name: 'videoDetail', params: { mvid: item.id }, query: { title: 'MV详情' } }"
            v-for="item in list"
            :key="item.id"
            class="cursor-pointer"
        >
            <div class="relative album">
                <m-image :src="item.picUrl" style="height: 135px"></m-image>
                <div
                    class="
                        text-white
                        bg-black
                        text-xs
                        absolute
                        top-0
                        w-full
                        opacity-50
                        rounded-t-md
                        box-border
                        max-h-0
                        overflow-hidden
                        mask
                      ">
                    最新热门MV推荐
                </div>
                <div class="absolute top-1 right-1 count text-white text-xs flex items-center">
                    <span class="el-icon-headset"></span>{{ item.playCount }}
                </div>
            </div>
            <div class="desc whitespace-nowrap overflow-ellipsis text-sm p-1 overflow-hidden">
                {{ item.name }}
            </div>
            <div class="single-ellipsis">
                <span v-for="(artist, index) in item.artists" :key="artist.id"
                      class="text-sm text-gray-700 hover:text-gray-900 p-1">
                  {{ index === 0 && index !== item.artists.length - 1 ? artist.name + '/' : artist.name }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.album:hover .count {
    opacity: 0;
}

.album:hover .mask {
    transition: max-height 0.3s;
    max-height: 50px !important;
    @apply p-2;
}
</style>