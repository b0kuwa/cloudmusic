const Discovery = () => import('@/views/discovery')
const Individuation = () => import('@/views/discovery/individuation')
const Playlist = () => import('@/views/discovery/playlist')
const PlaylistIndex = () => import('@/views/discovery/playlist/default')
const Quality = () => import('@/views/discovery/playlist/quality')
const Dj = () => import('@/views/discovery/dj')
const Rank = () => import('@/views/discovery/rank')
const Singer = () => import('@/views/discovery/singer')
const Newsong = () => import('@/views/discovery/newsong')

const Fm = () => import('@/views/fm')

const Video = () => import('@/views/video')
const VideoIndex = () => import('@/views/video/video')
const VideoDetail = () => import('@/views/video/detail')
const MV = () => import('@/views/video/mv')

const Friend = () => import('@/views/friend')

const Songlist = () => import('@/views/songlist')

const PrivateContent = () => import('@/views/private-content')

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
    }
]
