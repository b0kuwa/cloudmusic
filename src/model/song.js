/*
 * @Author: cully fung
 * @Date: 2021-08-26 17:33:32
 * @LastEditTime: 2022-08-28 23:59:40
 * @LastEditors: cully fung
 * @Description:
 */
export default class Song {
	constructor(id, name, singer, image, url, duration) {
		this.id = id
		this.name = name
		this.singer = singer
		this.image = image
		this.url = url
		this.duration = duration
	}
}

export const createSong = song => {
	return new Song(
		song.id,
		song.name,
		song.ar || song.artists,
		(song.al && song.al.picUrl) || '',
		`https://music.163.com/song/media/outer/url?id=${song.id}.mp3`,
		song.dt || song.duration
	)
}

export const createSongList = songList => {
	return songList.map(song => {
		return createSong(song)
	})
}
