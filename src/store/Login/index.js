import { observable, action } from 'mobx'

class Login {
    @observable loading = false
    @action setLoading = boolean => {
        this.loading = boolean
    }
}

export default new Login()
