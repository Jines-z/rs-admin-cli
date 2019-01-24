import Fly from 'flyio'
import { message } from 'antd'

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
