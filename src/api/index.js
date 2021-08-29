import * as base from './base/index'
import * as user from './user/index'
import * as dj from './dj/index'
import * as video from './video/index'
import * as playlist from './playlist/index'

export default {
    ...base,
    ...user,
    ...dj,
    ...video,
    ...playlist
}
