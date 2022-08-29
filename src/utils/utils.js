/*
 * @Author: cully fung
 * @Date: 2021-08-25 22:02:42
 * @LastEditTime: 2022-08-29 19:53:52
 * @LastEditors: cully fung
 * @Description:
 */
import { createSong } from '@/model/song'

// 处理音乐列表
export const handlePlaylist = songs => {
	return songs.map(item => {
		return createSong(item)
	})
}
