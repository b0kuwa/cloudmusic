/*
 * @Author: cully fung
 * @Date: 2021-08-29 21:09:26
 * @LastEditTime: 2022-08-29 19:58:16
 * @LastEditors: cully fung
 * @Description:
 */
import http from '@/utils/http'

/**
 * 获取默认搜索关键词
 * @returns
 */
export const getSearchDefault = () => http.get('/search/default')

/**
 * 获取热搜列表（简略）
 * @returns
 */
export const getSearchHot = () => http.get('/search/hot')

/**
 * 获取热搜列表（详细）
 * @returns
 */
export const getSearchHotDetail = () => http.get('/search/hot/detail')

/**
 * 获取搜索建议
 * 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * @param {*} keywords
 * @returns
 */
export const getSearchSuggest = keywords =>
	http.get('/search/suggest', { params: { keywords } })

/**
 * 获取搜索多重匹配
 * @param {*} keywords
 * @returns
 */
export const getSearchMutimatch = keywords =>
	http.get('/search/mutimatch', { params: { keywords } })
