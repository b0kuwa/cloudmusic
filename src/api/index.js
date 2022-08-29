import http from '@/utils/http'

/**
 *  获取轮播图
 * @param {*} type 资源类型,对应以下类型,默认为 0 即PC
 * 0: pc
 * 1: android
 * 2: iphone
 * 3: ipad
 * @returns
 */
export const getBanners = (type = 0) =>
	http.get('/banner', { params: { type } })

/**
 *  获取推荐 mv
 * @returns
 */
export const getPersonalizedMV = () => http.get('/personalized/mv')

/**
 * 获取推荐歌单
 * @param {*} limit  取出数量 , 默认为 30 (不支持 offset)
 * @returns
 */
export const getPersonalized = (limit = 30) =>
	http.get('/personalized', { params: { limit } })

/**
 *  获取推荐新音乐
 * @param {*} limit 取出数量 , 默认为 10 (不支持 offset)
 * @returns
 */
export const getPersonalizedNewSong = (limit = 10) =>
	http.get('/personalized/newSong', { params: { limit } })

/**
 * 获取推荐电台
 * @returns
 */
export const getPersonalizedDjProgram = () =>
	http.get('/personalized/djprogram')

/**
 *  获取推荐节目
 * @returns
 */
export const getProgramRecommend = () => http.get('/program/recommend')

/**
 *  获取独家放送(入口列表)
 * @returns
 */
export const getPersonalizedPrivateContent = () =>
	http.get('/personalized/privatecontent')

/**
 *  获取独家放送列表
 * @param {*} limit 返回数量 , 默认为 60
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*60, 其中 60 为 limit 的值 , 默认为 0
 * @returns
 */
export const getPersonalizedPrivateContentList = params =>
	http.get('/personalized/privatecontent/list', { params })

/**
 * 获取所有榜单
 * @returns
 */
export const getToplist = () => http.get('/toplist')

/**
 * 获取所有榜单内容摘要
 * @returns
 */
export const getToplistDetail = () => http.get('/toplist/detail')

/**
 * 获取歌手榜
 * 1: 华语
 * 2: 欧美
 * 3: 韩国
 * 4: 日本
 * @param {*} type 地区
 * @returns
 */
export const getToplistArtist = (type = 1) =>
	http.get('/toplist/artist', { params: { type } })

/**
 *  获取新歌速递
 * type: 地区类型 id,对应以下:
 * @param {*} type 全部:0 华语:7 欧美:96 日本:8 韩国:16
 * @returns
 */
export const getTopSong = type => http.get('/top/song', { params: { type } })

/**
 * 获取新碟上架
 *  如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30
 * @param limit: 取出数量 , 默认为 50
 * @param offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @param area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 * @param type : new:全部 hot:热门,默认为 new
 * @param year : 年,默认本年
 * @param month : 月,默认本月
 * @param {*} params
 * @example /top/album?offset=0&limit=30&year=2019&month=6
 * @returns
 */
export const getTopAlbum = params => http.get('/top/album', { params })

/**
 * 获取热门评论
 * id : 资源 id
 * type: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频
 * limit: 取出评论数量 , 默认为 20
 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @param {*} params
 * @returns
 */
export const getCommentHot = params => http.get('/comment/hot', { params })

/**
 * 获取音乐url
 * 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 * 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
 * @param {*} id 音乐id
 * @param br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * @returns /song/url?id=33894312 /song/url?id=405998841,33894312
 */
export const getSongUrl = id => http.get('/song/url', { params: { id } })
