import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { inject,observer } from 'mobx-react'
import { Spin } from 'antd'
import './index.less'

@withRouter
@inject('Store')
@observer
class Loading extends Component {
    componentDidUpdate(){
        if (this.props.Store.loading) {
            setTimeout(()=>{
                this.props.Store.updateLoading(false)
            },500)
        }
    }
    componentWillReceiveProps(){
        this.props.Store.updateLoading(true)
    }
    shouldComponentUpdate(nextProps){
        if (this.props.location.pathname != nextProps.location.pathname) {
            return true
        }
    }
    render() {
        return (
            <Spin tip='LOADING' wrapperClassName='Loading_wrap' spinning={this.props.Store.loading}>
                {this.props.children}
            </Spin>
        )
    }
}

export default Loading