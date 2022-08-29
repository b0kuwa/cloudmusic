import http from '@/utils/http'

/**
 * 获取电台banner
 * @returns
 */
export const getDjBanner = () => http.get('/dj/banner')

/**
 * 获取电台个性推荐
 * @param {*} limit 返回数量,默认为 6,总条数最多6条
 * @returns
 */
export const getDjPersonalizeRecommend = (limit = 6) =>
	http.get('/dj/personalize/recommend', { params: { limit } })

/**
 * 获取电台订阅者列表
 * @param {*} id 电台id
 * @param {*} time 分页参数,默认-1,传入上一次返回结果的 time,将会返回下一页的数据
 * @param {*} limit 返回数量,默认为 20
 * @returns
 * 例子： /dj/subscriber?id=335425050&time=1602761825390
 */
export const getDjSubscriber = (id, time = -1, limit = 20) =>
	http.get('/dj/subscriber', { params: { id, time, limit } })

/**
 * 获取用户电台
 * @param {*} uid 用户id
 * @returns
 */
export const getUserAudio = uid => http.get('/user/audio', { params: { uid } })

/**
 *  获取热门电台
 * @param {*} limit 返回数量 , 默认为 30
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns
 */
export const getDjHot = (limit = 30, offset = 0) =>
	http.get('/dj/hot', { params: { limit, offset } })

/**
 * 获取电台-节目榜
 * 登录后调用此接口 , 可获得电台节目榜
 * @param {*} limit 返回数量 , 默认为 100
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0
 * @returns
 */
export const getDjProgramToplist = (limit = 100, offset = 0) =>
	http.get('/dj/program/toplist', { params: { limit, offset } })

/**
 * 获取电台-付费精品
 * @param {*} limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns
 */
export const getDjToplistPay = (limit = 100) =>
	http.get('/dj/toplist/pay', { params: { limit } })

/**
 * 获取电台 - 24小时节目榜
 * @param {*} limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns
 */
export const getDjProgramToplistHours = (limit = 100) =>
	http.get('/dj/program/toplist/hours', { params: { limit } })

/**
 * 获取电台 - 24小时主播榜
 * @param {*} limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns
 */
export const getDjToplistHours = (limit = 100) =>
	http.get('/dj/toplist/hours', { params: { limit } })

/**
 * 获取电台 - 主播新人榜
 * @param {*} limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns
 */
export const getDjToplistNewcomer = (limit = 100) =>
	http.get('/dj/toplist/newcomer', { params: { limit } })

/**
 *  获取电台 - 最热主播榜
 * @param {*} limit 返回数量 , 默认为 100 (不支持 offset)
 * @returns
 */
export const getDjToplistPopular = (limit = 100) =>
	http.get('/dj/toplist/popular', { params: { limit } })

/**
 * 获取电台 - 新晋电台榜/热门电台榜
 * @param {*} limit 返回数量 , 默认为 100
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0
 * @param {*} type 榜单类型, new 为新晋电台榜,hot为热门电台榜 默认new
 * @returns
 */
export const getDjToplist = (limit = 100, offset = 0, type = 'new') =>
	http.get('/dj/toplist', { params: { limit, offset, type } })

/**
 * 获取电台 - 类别热门电台
 * @param {*} cateId 类别 id,可通过 /dj/category/recommend 接口获取
 * @param {*} limit 返回数量 , 默认为 30
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns
 */
export const getDjRadioHot = (cateId, limit = 30, offset = 0) =>
	http.get('/dj/radio/hot', { params: { cateId, limit, offset } })

/**
 *  获取电台推荐
 *  登录后调用此接口 , 可获得推荐电台
 * @returns
 */
export const getDjRecommend = () => http.get('/dj/recommend')

/**
 * 获取电台分类
 * 登录后调用此接口 , 可获得电台类型
 * @returns
 */
export const getDjCatelist = () => http.get('/dj/catelist')
