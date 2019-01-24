import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'
import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'
import FormBox from '../components/FormBox'
import service from '@/service'
import '../index.less'

@inject('Login', 'Root')
@observer
class Login extends Component {
    constructor(props) {
        super(props)
    }

    submit = (form, setLoading) => {
        form.validateFields(async(err, values) => {
            if (!err) {
                setLoading(true)
                let { userName, password } = values
                const param = {
                    userName,
                    password
                }
                const { success } = await service.login(param)
                setLoading(false)
                if (success) {
                    let message = `M&${userName}&${password}`
                    let key = 'react_starter'
                    let session = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(message, key))
                    Cookies.set('JSESSIONID', session, { expires: 1, path: '/' })
                    Cookies.set('userName', userName, { expires: 1, path: '/' })
                    this.props.Root.updateName(userName)
                    this.props.history.push('/home')
                } else {
                    message.error('账号：admin ； 密码：123456')
                }
            }
        })
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
            <div className='Login_wrap clearFix'>
                <div className='form P_auto'>
                    <span className='font icon-react'></span>
                    <FormBox submit={this.submit} />
                </div>
            </div>
        )
    }
}

export default Login
