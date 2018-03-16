import React, {Component} from 'react'
import { Menu } from 'antd'
const SubMenu = Menu.SubMenu
import './index.less'
import menuConfig from '../../config/menu'

class SideMenu extends Component {
    onSelect = ({key}) =>{
        this.props.history.replace(key)
    }
    render() {
        return (
            <div className='SideMenu_wrap'>
                <Menu mode="inline" theme="dark" onSelect={this.onSelect}>
                    {menuConfig.map((item,i)=>
                        item.list && item.list.length > 0 ?
                            <SubMenu key={item.key} title={<span><span className={'font icon-' +item.icon}></span><span>{item.title}</span></span>}>
                                {item.list.map((listItem,ii)=>
                                    <Menu.Item key={item.key+listItem.key}>
                                        <span>{listItem.title}</span>
                                    </Menu.Item>
                                )}
                            </SubMenu>
                            :
                            <Menu.Item key={item.key}>
                                <span className={'font icon-' +item.icon}></span>
                                <span>{item.title}</span>
                            </Menu.Item>
                    )}
                </Menu>
            </div>
        )
    }
}

export default SideMenu