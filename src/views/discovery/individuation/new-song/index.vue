<template>
    <!-- 内容 -->
    <div class="grid grid-cols-2 gap-4 box-border">
        <div v-for="(item, index) in list" :key="item.id" class="post hover:shadow-sm p-3 flex items-center">
            <div class="relative cursor-pointer" @click="playSong(item)">
                <m-image :src="item.picUrl" style="width: 70px;height: 70px;"></m-image>
                <span class="iconfont icon-play1 icon"></span>
            </div>
            <div class="m-2 flex items-center">
                <div class="text-gray-400 text-xs p-3">
                    {{ (index + 1) | paddingZero }}
                </div>
                <div>
                    <div class="text-sm cursor-default">{{ item.name }}</div>
                    <div class="text-xs text-gray-500">
            <span
                v-for="(artist, index) in item.song.artists"
                :key="index"
                class="artistname cursor-pointer hover:text-gray-900"
            >{{ artist.name }}</span
            >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    methods: {
        playSong(song) {
            this.$store.dispatch('setPlayOne', song)
        }
    }
}
</script>

<style scoped>
.post:hover {
    background: #f5f5f5;
}

.title {
    @apply font-medium text-gray-700 hover:text-gray-900 cursor-pointer my-4 block;
}

.desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}

.album {
    height: 70px;
    width: 70px;
}

.artistname:not(:last-child)::after {
    content: '/';
    padding: 0 2px;
}

.icon {
    font-size: 25px;
    @apply text-red-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2;
}
</style>