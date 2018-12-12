import React, { Component } from 'react'
import Cookies from 'js-cookie'
import Left from '../components/Left'
import Right from '../components/Right'
import '../index.less'

class Layouts extends Component {
    logout = () => {
        Cookies.remove('JSESSIONID', { path: '/' })
        Cookies.remove('userName', { path: '/' })
        this.props.history.replace('/login')
    }

    render() {
        return (
            <div className='Layouts_wrap clearFix'>
                <Left />
                <Right logout={this.logout} />
            </div>
        )
    }
}

export default Layouts
