import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import menu from '@/config/menu'
import './index.less'
const SubMenu = Menu.SubMenu

@withRouter
class SideMenu extends Component {
    state={
        keys: []
    }

    componentWillMount() {
        this.selectKey()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname != nextProps.location.pathname) {
            this.selectKey()
        }
    }

    selectKey = () => {
        let keys = []
        keys.push(this.props.history.location.pathname)
        this.setState({ keys: keys })
    }

    onSelect = ({ key }) => {
        this.props.history.push(key)
    }

    titleNode = item => {
        return (
            <span>
                <span className={'font icon-' + item.icon}></span>
                <span>{item.name}</span>
            </span>
        )
    }

    render() {
        return (
            <div className='SideMenu_wrap'>
                <Menu
                    mode='inline'
                    theme='dark'
                    onSelect={this.onSelect}
                    selectedKeys={this.state.keys}
                    defaultOpenKeys={['/' + this.state.keys[0].split('/')[1]]}
                >
                    {menu.map((item, i) =>
                        item.list && item.list.length > 0
                            ? (
                                <SubMenu key={item.path} title={this.titleNode(item)}>
                                    {item.list.map((listItem, ii) =>
                                        <Menu.Item key={item.path + listItem.path}>
                                            <span>{listItem.name}</span>
                                        </Menu.Item>
                                    )}
                                </SubMenu>
                            )
                            : (
                                <Menu.Item key={item.path}>
                                    <span className={'font icon-' + item.icon}></span>
                                    <span>{item.name}</span>
                                </Menu.Item>
                            )
                    )}
                </Menu>
            </div>
        )
    }
}

export default SideMenu
