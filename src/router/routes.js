// 发现音乐
const Discovery = () => import('@/views/discovery')
// 个性化
const Individuation = () => import('@/views/discovery/individuation')
// 歌单
const Playlist = () => import('@/views/discovery/playlist')
// 歌单首页
const PlaylistIndex = () => import('@/views/discovery/playlist/default')
// 精品歌单
const Quality = () => import('@/views/discovery/playlist/quality')
// 电台
const Dj = () => import('@/views/discovery/dj')
// 排行榜
const Rank = () => import('@/views/discovery/rank')
// 歌手
const Singer = () => import('@/views/discovery/singer')
// 最新音乐
const Newsong = () => import('@/views/discovery/newsong')

// 私人FM
const Fm = () => import('@/views/fm')

const Video = () => import('@/views/video')
const VideoIndex = () => import('@/views/video/video')
// 视频
const VideoDetail = () => import('@/views/video/detail')
// mv
const MV = () => import('@/views/video/mv')

// 朋友
const Friend = () => import('@/views/friend')

// 歌单详情页
const Songlist = () => import('@/views/songlist')

// 独家放送
const PrivateContent = () => import('@/views/private-content')

// 搜索页
const Search = () => import('@/views/search')

export default [
    {
        path: '/',
        redirect: '/discovery'
    },
    {
        name: 'discovery',
        path: '/discovery',
        component: Discovery,
        redirect: 'discovery/individuation',
        children: [
            {
                name: 'individuation',
                path: 'individuation',
                component: Individuation
            },
            {
                name: 'playlist',
                path: 'playlist',
                component: Playlist,
                redirect: 'playlist/playlistDefault',
                children: [
                    {
                        name: 'playlistDefault',
                        path: 'playlistDefault',
                        component: PlaylistIndex
                    },
                    {
                        name: 'quality',
                        path: 'quality/:cat',
                        component: Quality,
                        props: route => ({ cat: route.params.cat })
                    }
                ]
            },
            {
                name: 'dj',
                path: 'dj',
                component: Dj
            },
            {
                name: 'rank',
                path: 'rank',
                component: Rank
            },
            {
                name: 'singer',
                path: 'singer',
                component: Singer
            },
            {
                name: 'newsong',
                path: 'newsong',
                component: Newsong
            }
        ]
    },
    {
        name: 'fm',
        path: '/fm',
        component: Fm
    },
    {
        name: 'video',
        path: '/video',
        component: Video,
        redirect: 'video/videoIndex',
        children: [
            {
                name: 'videoIndex',
                path: 'videoIndex',
                component: VideoIndex
            },
            {
                name: 'mv',
                path: 'mv',
                component: MV
            },
            {
                name: 'videoDetail',
                path: 'detail/:mvid',
                component: VideoDetail,
                props: route => ({ mvid: route.params.mvid, title: route.query.title })
            }
        ]
    },
    {
        name: 'friend',
        path: '/friend',
        component: Friend
    },
    // 歌单详情
    {
        name: 'songlist',
        path: '/songlist',
        props: route => ({ id: route.query.id }),
        component: Songlist
    },
    // 独家放送
    {
        name: 'privatecontent',
        path: '/privatecontent',
        component: PrivateContent
    },
    // 搜索页
    {
        name: 'search',
        path: '/search',
        component: Search
    }
]
