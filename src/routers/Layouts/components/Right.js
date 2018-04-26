import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Tooltip } from 'antd'
import routerConfig from '@/config/routes'
import Cookies from 'js-cookie'
import Loading from '@/components/Loading'

@withRouter
@inject('Store')
@observer
class Right extends Component {
    componentWillMount(){
        let { userInfo,updateName } = this.props.Store
        if (userInfo.name == '') {
            updateName(Cookies.get('userName'))
        }
    }
    logout = () =>{
        this.props.logout()
    }
    render() {
        const { name } = this.props.Store.userInfo
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={<span style={{fontSize:'14px',cursor:'pointer'}} onClick={this.logout}>退出</span>}>
                            <span className='name'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading>
                        {routerConfig.map((item,i)=>
                            <Route key={i} path={item.path} component={item.component} exact/>
                        )}
                    </Loading>
                </div>
            </div>
        )
    }
}

export default Right