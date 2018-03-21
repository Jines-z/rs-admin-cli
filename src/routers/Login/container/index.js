import React, {Component} from 'react'
import FromBox from '../components/FormBox'
import './index.less'

class Login extends Component {
    render() {
        return (
            <div className='Login_wrap clear clearFix'>
                <div className='form P_auto'>
                    <span className='font icon-react'></span>
                    <FromBox />
                </div>
            </div>
        )
    }
}

export default Login