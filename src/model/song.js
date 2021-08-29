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
        song.ar,
        song.al.picUrl,
        `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`,
        song.dt
    )
}

export const createSongList = songList => {
    return songList.map(song => {
        return createSong(song)
    })
}
