let apiBaseUrl = ''
if (process.env.NODE_ENV === 'development') {
    apiBaseUrl = 'http://192.168.31.131:3000'
} else if (process.env.NODE_ENV === 'production') {
    apiBaseUrl = 'http://192.168.31.131:3000'
}

export default apiBaseUrl
