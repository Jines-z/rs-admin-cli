import {observable, action} from 'mobx'

class Store {
    @observable userInfo = {
        name : 'admin'
    }
    @action updateName = (name) => {
        this.userInfo.name = name
    }
}

export default new Store()