import ajax from './ajax'

/**
 * /homepage/block/page
 * @returns 发现音乐
 */
export const reqHomepage = () => ajax('/homepage/block/page')

/**
 * /personalized/privatecontent/list
 * @param limit 返回数量 , 默认为 60
 * @param offset 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
 * @returns 独家放送
 */
export const reqPersonalized = () => ajax('/personalized/privatecontent/list')

/**
 * /recommend/resource
 * @returns 首页轮播图
 */
export const reqBanners = () => ajax('/banner')

/**
 * /recommend/resource
 * @returns 推荐歌单
 */
export const reqRecommendSongList = () =>
	ajax('/personalized', {
		params: {
			limit: 10
		}
	})

/**
 * /recommend/songs
 * @returns 每日推荐歌单
 */
export const reqTodayRecommend = () => ajax('/recommend/songs')

/**
 * /personalized/privatecontent/list?limit=4
 * @returns 独家放送
 */
export const reqPrivateContent = () =>
	ajax('/personalized/privatecontent/list', {
		params: {
			limit: 4
		}
	})
/**
 * /personalized/newsong limit默认为10
 * @returns 最新音乐
 */
export const reqNewSongs = () => ajax('/personalized/newsong')

/**
 * /personalized/mv
 * @returns 推荐mv
 */
export const reqRecommendMV = () => ajax('/personalized/mv')

/**
 * /personalized/djprogram
 * @returns 电台
 */
export const reqAnchorRadio = () => ajax('/personalized/djprogram')

/**
 * /top/playlist/highquality
 * @returns 精品歌单
 */
export const reqQualitySongList = () => ajax('/top/playlist/highquality')

/**
 * /playlist/hot
 * @returns 热门歌单分类
 */
export const reqHotPlayList = () => ajax('/playlist/hot')

/**
 * /top/playlist
 * @returns 网友精选歌单
 */
export const reqTopPlayList = ()=>ajax('/top/playlist')