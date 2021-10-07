export default {
	data() {
		return {
			list: Object.freeze([
				{
					label: '发现音乐',
					icon: 'iconfont icon-yinle',
					to: { path: '/discovery' }
				},
				{
					label: '私人FM',
					icon: 'iconfont icon-radio',
					to: { path: '/fm' }
				},
				{
					label: '视频',
					icon: 'iconfont icon-VideoClip',
					to: { path: '/video' }
				},
				{
					label: '朋友',
					icon: 'iconfont icon-friend',
					to: { path: '/friend' }
				}
			])
		}
	}
}
