import Recommend from '@/views/Recommend'
import PlayList from '@/views/PlayList'
import QualitySongList from '@/views/PlayList/QualitySongList'

export default [
	{
		path: '/recommend',
		component: Recommend
	},
	{
		path: '/playlist',
		component: PlayList,
		children:[
			{
				name:'qualitySongList',
				path:'/qualitySongList',
				component:QualitySongList,
			}
		]
	},
	{
		path: '/',
		redirect: '/recommend'
	}
]
