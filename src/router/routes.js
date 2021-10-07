export default [
	{
		path: '/',
		redirect: '/discovery'
	},
	{
		path: '/discovery',
		component: () => import('@/views/discovery'),
		children: [
			{
				path: '',
				redirect: '/discovery/individuation'
			},
			{
				path: 'individuation',
				component: () => import('@/views/discovery/individuation')
			},
			{
				path: 'playlist',
				component: () => import('@/views/discovery/playlist'),
				children: [
					{
						name: 'playlist-home',
						path: '',
						component: () => import('@/views/discovery/playlist/home')
					},
					{
						name: 'quality',
						path: 'quality/:cat',
						component: () => import('@/views/discovery/playlist/quality'),
						props: route => ({ cat: route.params.cat })
					}
				]
			},
			{
				path: 'dj',
				component: () => import('@/views/discovery/dj')
			},
			{
				path: 'rank',
				component: () => import('@/views/discovery/rank')
			},
			{
				path: 'singer',
				component: () => import('@/views/discovery/singer')
			},
			{
				path: 'newsong',
				component: () => import('@/views/discovery/newsong')
			}
		]
	},
	{
		path: '/fm',
		component: () => import('@/views/fm')
	},
	{
		path: '/video',
		component: () => import('@/views/video'),
		children: [
			{
				path: '',
				redirect: '/video/video-home'
			},
			{
				name: 'video-home',
				path: 'video-home',
				component: () => import('@/views/video/home')
			},
			{
				path: 'mv',
				component: () => import('@/views/video/mv')
			},
			{
				name: 'videoDetail',
				path: 'detail/:mvid',
				component: () => import('@/views/video/detail'),
				props: route => ({ mvid: route.params.mvid, title: route.query.title })
			}
		]
	},
	{
		path: '/friend',
		component: () => import('@/views/friend')
	},
	// 歌单详情
	{
		path: '/songlist',
		component: () => import('@/views/songlist'),
		props: route => ({ id: route.query.id })
	},
	// 独家放送
	{
		name: 'privatecontent',
		path: '/privatecontent',
		component: () => import('@/views/private-content')
	},
	// 搜索页
	{
		path: '/search',
		component: () => import('@/views/search')
	}
]
