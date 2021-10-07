import router from '@/router'

const routeLinks = {
    discovery: [
        {
            label: '个性推荐',
            to: {
                name: 'individuation'
            }
        },
        {
            label: '歌单',
            to: { name: 'playlist' }
        },
        {
            label: '主播电台',
            to: { name: 'dj' }
        },
        {
            label: '排行榜',
            to: { name: 'rank' }
        },
        {
            label: '最新音乐',
            to: { name: 'newsong' }
        }],
    fm: [],
    video: [
        {
            label: '视频',
            to: { name: 'videoIndex' }
        },
        {
            label: 'MV',
            to: { name: 'mv' }
        }
    ],
    friend: [
        {
            label: '动态',
            to: {
                name: 'dynamic'
            }
        }
    ]
}

// router.beforeEach((to, from, next) => {
//     Object.keys(routeLinks).some(item => {
//         if (to.path.includes(item)) {
//             next({
//                 name: item, query: {nav:routeLinks[item]}
//             })
//         }
//     })
//
// })