import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Tooltip } from 'antd'
import Cookies from 'js-cookie'
import Loading from '@/components/Loading'
import routes from '@/config/routes'

@withRouter
@inject('Root')
@observer
class Right extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        let { userInfo, updateName } = this.props.Root
        if (userInfo.name == '') {
            updateName(Cookies.get('userName'))
        }
    }

    titleNode = () => {
        return (
            <span
                style={{ fontSize: '14px', cursor: 'pointer' }}
                onClick={this.logout}
            >
                退出
            </span>
        )
    }

    logout = () => {
        this.props.logout()
    }

    render() {
        const { name } = this.props.Root.userInfo
        return (
            <div className='right'>
                <div className='header clear clearFix'>
                    <div className='user'>
                        <span className='font icon-touxiang'></span>
                        <Tooltip title={this.titleNode()}>
                            <span className='name'>{name}</span>
                        </Tooltip>
                    </div>
                </div>
                <div className='routeWrap'>
                    <Loading>
                        {routes.map((item, i) =>
                            <Route key={i} path={item.path} component={item.component} exact />
                        )}
                    </Loading>
                </div>
            </div>
        )
    }
}

export default Right
