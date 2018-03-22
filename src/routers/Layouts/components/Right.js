import React, {Component} from 'react'
import { Route,withRouter } from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import routerConfig from '@/config/routes'
import cookie from '@/config/cookie'

@withRouter
@inject('Store')
@observer
class Right extends Component {
    componentWillMount(){
        let {userInfo,updateName} = this.props.Store
        if (userInfo.name == '') {
            updateName(cookie.get().userName)
        }
    }
    render() {
        const {name} = this.props.Store.userInfo
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <span>{name}</span>
                    </div>
                </div>
                {routerConfig.map((item,i)=>
                    <Route key={i} path={item.path} component={item.component} exact/>
                )}
            </div>
        )
    }
}

export default Right