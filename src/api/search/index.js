import api from '@/api/instance'

/**
 * 获取默认搜索关键词
 * @returns
 */
export const getSearchDefault = () => api.get('/search/default')

/**
 * 获取热搜列表（简略）
 * @returns
 */
export const getSearchHot = () => api.get('/search/hot')

/**
 * 获取热搜列表（详细）
 * @returns
 */
export const getSearchHotDetail = () => api.get('/search/hot/detail')

/**
 * 获取搜索建议
 * 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * @param {*} keywords
 * @returns
 */
export const getSearchSuggest = keywords => api.get('/search/suggest', { params: { keywords } })

/**
 * 获取搜索多重匹配
 * @param {*} keywords
 * @returns
 */
export const getSearchMutimatch = keywords => api.get('/search/mutimatch', { params: { keywords } })
