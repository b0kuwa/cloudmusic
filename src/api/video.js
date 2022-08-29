import http from '@/utils/http'

/**
 * 获取mv排行
 * @param {*} limit 取出数量 , 默认为 30
 * @param {*} area 地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 * @param {*} offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
 * @returns
 */
export const getMvTop = (limit = 30, area = '全部', offset = 0) =>
	http.get('/mv/top', { params: { limit, area, offset } })

/**
 *  获取mv数据
 * 调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 数据 , 数据包含 mv 名字 , 歌手 , 发布时间 , mv 视频地址等数据 , 其中 mv 视频 网易做了防盗链处理 , 可能不能直接播放 , 需要播放的话需要调用 ' mv 地址' 接口
 * @param {*} mvid
 * @returns
 */
export const getMvDetail = mvid => http.get('/mv/detail/', { params: { mvid } })

/**
 *  获取 mv 点赞转发评论数数据
 *  调用此接口 , 传入 mvid ( 在搜索音乐的时候传 type=1004 获得 ) , 可获取对应 MV 点赞转发评论数数据
 * @param {*} mvid
 * @returns
 */
export const getMvDetailInfo = mvid =>
	http.get('/mv/detail/info', { params: { mvid } })

/**
 * 获取mv地址
 * 调用此接口 , 传入 mv id,可获取 mv 播放地址
 * 可选参数 : r: 分辨率,默认1080,可从 /mv/detail 接口获取分辨率列表
 * @param {*} id mv id
 * @returns
 */
export const getMvUrl = (id, r = '1080') =>
	http.get('/mv/url', { params: { id, r } })

/**
 * 获取视频标签列表
 * @returns
 */
export const getVideoGroupList = () => http.get('/video/group/list')

/**
 * 获取视频分类列表
 * @returns
 */
export const getVideoCategoryList = () => http.get('/video/category/list')

/**
 * 获取视频标签/分类下的视频
 * @param {*} id videoGroup 的 id
 * @param {*} offset  默认0
 * @returns
 */
export const getVideoGroup = (id, offset = 0) =>
	http.get('/video/group', { params: { id, offset } })

/**
 * 获取全部视频列表
 * 调用此接口,可获取视频分类列表,分页参数只能传入offset
 * @param {*} offset 默认0
 * @returns
 */
export const getVideoTimelineAll = (offset = 0) =>
	http.get('/video/timeline/all', { params: { offset } })

/**
 * 获取推荐视频
 * 调用此接口, 可获取推荐视频,分页参数只能传入offset
 * @param {*} offset 默认0
 * @returns
 */
export const getVideoTimelineRecommend = (offset = 0) =>
	http.get('/video/timeline/recommend', { params: { offset } })

/**
 * 相关视频
 * @param {*} id 视频id
 * @returns
 */
export const getRelatedAllvideo = id =>
	http.get('/related/allvideo', { params: { id } })

/**
 * 视频详情
 * @param {*} id 视频id
 * @returns
 */
export const getVideoDetail = id =>
	http.get('/video/detail', { params: { id } })

/**
 * 获取视频点赞转发评论数数据
 * @param {*} vid 视频id
 * @returns
 */
export const getVideoDetailInfo = vid =>
	http.get('/video/detail/info', { params: { vid } })

/**
 * 获取视频播放地址
 * @param {*} id 视频id
 * @returns
 */
export const getVideoUrl = id => http.get('/video/url', { params: { id } })

/**
 *  获取mv评论
 * @param {*} id mv id
 * limit: 取出评论数量 , 默认为 20
 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns
 */
export const getCommentMv = params => http.get('/comment/mv/', { params })
