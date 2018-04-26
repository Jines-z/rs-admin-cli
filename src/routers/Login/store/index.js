/* ========================================================

    ** Login自己的store **

    不要直接实例化，在 container 通过 Provider 渗透到所有子组件。
    在子组件内用 @inject('store')，将 store 注入到自己的 props 上。

   ====================================================== */
import { observable, action } from 'mobx'

class Store {
    @observable loading = false
    @action updateLoading = (boolean) => {
        this.loading = boolean
    }
}

export default Store