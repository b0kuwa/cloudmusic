/*
 * @Author: cully fung
 * @Date: 2022-08-29 19:53:40
 * @LastEditTime: 2022-08-29 19:53:50
 * @LastEditors: cully fung
 * @Description:
 */
export const getStorage = k => JSON.parse(window.localStorage.getItem(k))

export const setStorage = (k, v) =>
	window.localStorage.setItem(k, JSON.stringify(v))

export const removeStorage = k => window.localStorage.removeItem(k)

export const clearStorage = () => window.localStorage.clear()
