import {observable, action} from 'mobx'

class Store {
    @observable loading = false
    @action updateLoading = (boolean) => {
        this.loading = boolean
    }
}

export default Store