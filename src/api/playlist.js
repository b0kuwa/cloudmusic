import http from '@/utils/http'

/**
 * 获取歌单分类
 * 调用此接口,可获取歌单分类,包含 category 信息
 */
export const getPlaylistCatelist = () => http.get('/playlist/catlist')

/**
 * 获取热门歌单分类
 * 调用此接口,可获取歌单分类,包含 category 信息
 */
export const getPlaylistHot = () => http.get('/playlist/hot')

/**
 * 获取歌单(网友精选碟)
 * @param {*} order 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
 * @param {*} cat tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @param {*} limit 取出歌单数量 , 默认为 50
 * @param {*} offset offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*50, 其中 50 为 limit 的值
 * @returns
 */
export const getTopPlaylist = params => http.get('/top/playlist', { params })

/**
 * 获取精品歌单标签列表
 * @returns
 */
export const getPlaylistHighqualityTags = () =>
	http.get('/playlist/highquality/tags')

/**
 * 获取精品歌单
 * @param {*} cat  tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
 * @param {*} limit 取出歌单数量 , 默认为 20
 * @param {*} before 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
 * @returns
 */
export const getTopPlayListHighquality = params =>
	http.get('/top/playlist/highquality', { params })

/**
 * 获取相关歌单推荐
 * @param {*} id 歌单 id
 * @returns
 */
export const getRelatedPlaylist = id =>
	http.get('/related/playlist', { params: { id } })

/**
 * 获取歌单详情
 * 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusichttp/issues/452)
 * @param {*} id 歌单id
 * @param {*} s 歌单最近的 s 个收藏者,默认为8
 * @returns
 */
export const getPlaylistDetail = (id, s = 8) =>
	http.get('/playlist/detail', { params: { id, s } })

/**
 * 获取歌曲详情
 * 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情
 * @param {*} ids 音乐 id, 如 ids=347230
 * @example 调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231
 * @returns
 */
export const getSongDetail = ids =>
	http.get('/song/detail', { params: { ids } })

/**
 * 获取歌单详情动态
 * 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
 * @param {*} id
 * @returns
 */
export const getPlaylistDetailDynamic = id =>
	http.get('/playlist/detail/dynamic', { params: { id } })

/**
 * 获取音乐url
 * 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 * @param {*} id 音乐 id
 * 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * 调用例子 : /song/url?id=33894312 /song/url?id=405998841,33894312
 * @returns
 */
export const getSongUrl = id => http.get('/song/url', { params: { id } })

/**
 * 获取音乐是否可用
 * 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
 * @param {*} id 歌曲 id
 * 可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 * 调用例子 : /check/music?id=33894312
 * @returns
 */
export const getCheckMusic = id => http.get('/check/music', { id })

/**
 *  歌单收藏者-调用此接口 , 传入歌单 id 可获取歌单的所有收藏者
 * @param {必选:id(歌单 id),可选:limit(取出评论数量 , 默认为 20),offset(偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值)} params
 * @returns
 */
export const getPlaylistSubscribers = params =>
	http.get('/playlist/subscribers', { params })
