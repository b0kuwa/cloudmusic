/*
 * @Author: cully fung
 * @Date: 2021-08-21 09:44:39
 * @LastEditTime: 2022-08-29 19:57:21
 * @LastEditors: cully fung
 * @Description:
 */
import http from '@/utils/http'

/**
 *  手机登录
 * @param {*} phone
 * @param {*} password
 */
export const login = (phone, password) =>
	http.get(`/login/cellphone?phone=${phone}&password=${password}`, {
		withCredentials: true
	})

/**
 *  获取用户详情
 * @param {*} uid
 */
export const getUserDetail = uid =>
	http.get('/user/detail', { params: { uid } })

/**
 *  获取用户播放记录
 * @param {*} uid
 * @param {*} type  1：weekData  0:allData
 * @returns
 */
export const getUserRecord = (uid, type) =>
	http.get('/user/record', { params: { uid, type } })

/**
 *  获取用户歌单
 * @param {*} uid
 * @param {*} limit 返回数量 默认30
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @returns
 */
export const getUserPlaylist = (uid, limit = 30, offset = 0) =>
	http.get('/user/playlist', { params: { uid, limit, offset } })

/**
 *  退出登录
 * @returns
 */
export const logout = () => http.get('/logout')
