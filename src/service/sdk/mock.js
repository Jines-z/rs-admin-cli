import http from '../http'
import API from '../api'

export default {
    login(param) {
        return http.get(API.LOGIN, param)
    }
}
