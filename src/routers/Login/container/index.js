import React, {Component} from 'react'
import {Provider, inject, observer} from 'mobx-react'
import CryptoJS from 'crypto-js'
import FormBox from '../components/FormBox'
import cookie from '@/config/cookie'
import store from '../store'
import './index.less'

@inject('Store')
@observer
class Login extends Component {
    constructor(){
        super()
        this.store = new store() // 在这里实例化，保证每次加载组件数据的初始化。
    }
    submit = (form,updateLoading) =>{
        form.validateFields((err, values) => {
            if (!err) {
                updateLoading(true)
                this.timer = setTimeout(() => {
                    updateLoading(false)
                    let {userName, password} = values
                    if (userName == 'admin' && password == '123456') {
                        let message = `M&${userName}&${password}`
                        let key = 'react_starter'
                        let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
                        cookie.set({
                            name: 'JSESSIONID',
                            value: session,
                            path: '/',
                            day: 1
                        })
                        cookie.set({
                            name: 'userName',
                            value: userName,
                            path: '/',
                            day: 1
                        })
                        this.props.Store.updateName(userName)
                        this.props.history.push('/home')
                    }
                }, 1500)
            }
        });
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    render() {
        return (
            <Provider store={this.store}>
                <div className='Login_wrap clear clearFix'>
                    <div className='form P_auto'>
                        <span className='font icon-react'></span>
                        <FormBox submit={this.submit}/>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default Login