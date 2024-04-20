<template>
	<div class="relative w-full bg-gray-50" style="height: 60px;">
		<!-- 音乐播放进度条 -->
		<div class="slider__wrap">
			<div class="slider__line" :style="{ width: progress }"></div>
		</div>
		<!-- 内容区 -->
		<div class="flex justify-between items-center w-full relative px-1" style="height: 50px;">
			<!-- 歌曲信息 -->
			<div class="music-info">
				<div class="flex items-center" v-if="currentPlay.id">
					<m-image :src="currentPlay.image" style="width: 35px;height: 35px;"></m-image>
					<div class="ml-2">
						<p>
							<span class="text-sm">{{ currentPlay.name }}</span> -
							<span v-for="item in currentPlay.singer" :key="item.id" class="text-gray-600 text-xs">{{ item.name }}&nbsp;</span>
						</p>
						<p class="text-xs text-gray-600">{{ currentTime | currentTime }} / {{ currentPlay.duration | duration }}</p>
					</div>
				</div>
			</div>
			<!-- 控制器 -->
			<div class="text-red-500 flex items-center absolute-center" style="font-size: 20px">
				<!-- 上一首 -->
				<span class="material-icons cursor-pointer" style="font-size: 25px" @click="prev"> skip_previous </span>
				<!-- 播放 暂停 -->
				<span class="material-icons cursor-pointer mx-4" style="font-size: 45px" @click="pause" v-if="isPlaying">
					pause_circle
				</span>
				<span class="material-icons cursor-pointer mx-4" style="font-size: 45px" @click="play" v-else> play_circle </span>
				<!-- 下一首 -->
				<span class="material-icons cursor-pointer" style="font-size: 25px" @click="next"> skip_next </span>
			</div>
			<div class="text-gray-600 mr-8 flex items-center gap-5">
				<!-- 播放列表显示 -->
				<el-popover placement="top" width="420" trigger="click" :visible-arrow="false" popper-class="playlist-popover">
					<div class="relative">
						<header class="p-4 sticky top-0 z-10 bg-white pb-1">
							<h1 class="text-xl font-medium">当前播放</h1>
							<p class="flex justify-between items-center my-1">
								<span class="text-gray-400 text-xs">总{{ songCount }}首</span>
								<span @click="clearPlaylist" class="text-sm text-blue-400 hover:text-blue-500 cursor-pointer">清空列表</span>
							</p>
						</header>
						<main class="overflow-y-auto" style="height: calc(100vh - 200px);">
							<ul class="playlist single-ellipsis">
								<li
									v-for="(item, index) in playlist"
									:key="item.id"
									class="flex px-4 py-2 text-xs justify-between cursor-default"
								>
									<p class="text-gray-700 w-52 single-ellipsis" :class="{ active: currentIndex === index }">
										{{ item.name }}
									</p>
									<p class="text-gray-600 w-28 single-ellipsis" :class="{ active: currentIndex === index }">
										<span v-for="item2 in item.singer" :key="item2.id">{{ item2.name }}&nbsp;</span>
									</p>
									<p class="text-gray-500 w-3 mr-6">{{ item.duration | duration }}</p>
								</li>
							</ul>
						</main>
					</div>
					<span slot="reference" class="material-icons cursor-pointer"> playlist_play </span>
				</el-popover>
				<!-- 音量控制 -->
				<el-popover placement="top" trigger="hover" width="30" popper-class="volume-popover">
					<el-slider v-model="volume" vertical height="100px"></el-slider>
					<span
						class="material-icons cursor-pointer"
						style="transform: scale(0.8)"
						slot="reference"
						v-text="volume > 0 ? 'volume_up' : 'volume_off'"
					>
					</span>
				</el-popover>
			</div>
		</div>
		<!-- 播放器 -->
		<audio
			:src="currentPlay.url"
			ref="audioRef"
			@playing="playing"
			@ended="next"
			@timeupdate="updateProgress"
			@canplay="play"
			class="hidden"
		></audio>
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
	name: 'm-audio',
	data() {
		return {
			// 音量
			volume: 50,
			//  进度条进度
			progress: 0,
			// 当前播放时间
			currentTime: 0,
			popVisible: false
		}
	},
	computed: {
		...mapState({
			playlist: state => state.playlist,
			currentIndex: state => state.currentIndex,
			isPlaying: state => state.isPlaying
		}),
		...mapGetters(['currentPlay', 'songCount'])
	},
	watch: {
		volume: {
			handler(newVal) {
				// 音量范围设置只能[0,1]
				this.$refs.audioRef.volume = newVal / 100
			}
		},
		currentPlay(newValue) {
			if (!newValue.id) {
				this.$refs.audioRef.src = ''
				this.progress = 0
			}
		}
	},
	methods: {
		play() {
			if (!this.currentPlay.id) return this.$notify.error('当前播放列表为空，不能播放！')
			this.$refs.audioRef.play()
		},
		pause() {
			this.$store.dispatch('setPlayPause')
			this.$refs.audioRef.pause()
		},
		next() {
			this.$store.dispatch('setPlayNext')
			this.play()
		},
		prev() {
			this.$store.dispatch('setPlayPrev')
			this.play()
		},
		// 更新进度条
		updateProgress(e) {
			this.currentTime = e.target.currentTime
			this.progress = (this.currentTime / this.$refs.audioRef.duration) * 100 + '%'
		},
		playing() {
			this.$store.commit('SET_PLAYING_STATUS', true)
		},
		clearPlaylist() {
			this.$store.commit('SET_CLEAR_PLAYLIST')
		}
	}
}
</script>

<style lang="scss" scoped>
/* 播放进度 */
.slider__wrap {
	height: 10px;
	display: flex;
	align-items: center;

	&:hover .slider__line::after {
		opacity: 1;
	}

	.slider__line {
		position: relative;
		height: 2px;
		background-color: #f00;

		&::after {
			content: '';
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 10px;
			height: 10px;
			opacity: 0;
			border-radius: 50%;
			background-color: #f00;
		}
	}
}

.music-info {
	height: 100%;
	padding: 5px;
}

.playlist li:nth-child(even) {
	@apply bg-gray-100;
}

.playlist li {
	@apply hover:text-gray-900;
}

.active {
	@apply text-red-600;
}
</style>
