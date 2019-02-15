import Fly from 'flyio'
import { message } from 'antd'

Fly.interceptors.request.use(request => {
    request.timeout = 10000
    return request
})

Fly.interceptors.response.use(
    response => response.data,
    err => {
        message.error(`${err.status} ${err.message}`)
    }
)

export default {
    get(url, param) {
        return Fly.get(url, param)
    }
}
