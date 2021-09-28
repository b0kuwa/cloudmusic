export default [
  {
    path: '/',
    redirect: '/discovery'
  },
  {
    name: 'discovery',
    path: '/discovery',
    component: () => import('@/views/discovery'),
    redirect: 'discovery/individuation',
    children: [
      {
        name: 'individuation',
        path: 'individuation',
        component: () => import('@/views/discovery/individuation')
      },
      {
        name: 'playlist',
        path: 'playlist',
        component: () => import('@/views/discovery/playlist'),
        redirect: 'playlist/playlist-home',
        children: [
          {
            name: 'playlist-home',
            path: 'playlist-home',
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
        name: 'dj',
        path: 'dj',
        component: () => import('@/views/discovery/dj')
      },
      {
        name: 'rank',
        path: 'rank',
        component: () => import('@/views/discovery/rank')
      },
      {
        name: 'singer',
        path: 'singer',
        component: () => import('@/views/discovery/singer')
      },
      {
        name: 'newsong',
        path: 'newsong',
        component: () => import('@/views/discovery/newsong')
      }
    ]
  },
  {
    name: 'fm',
    path: '/fm',
    component: () => import('@/views/fm')
  },
  {
    name: 'video',
    path: '/video',
    component: () => import('@/views/video'),
    children: [
      {
        name: 'video-home',
        path: 'video-home',
        component: () => import('@/views/video/home')
      },
      {
        name: 'mv',
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
    name: 'friend',
    path: '/friend',
    component: () => import('@/views/friend')
  },
  // 歌单详情
  {
    name: 'songlist',
    path: '/songlist',
    props: route => ({ id: route.query.id }),
    component: () => import('@/views/songlist')
  },
  // 独家放送
  {
    name: 'privatecontent',
    path: '/privatecontent',
    component: () => import('@/views/private-content')
  },
  // 搜索页
  {
    name: 'search',
    path: '/search',
    component: () => import('@/views/search')
  }
]
