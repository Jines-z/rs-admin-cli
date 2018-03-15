import React, {Component} from 'react'
import './Layouts.less'
import logo from './assets/logo.png'
import SideMenu from '../../components/SideMenu'
class Layouts extends Component {
    render() {
        return (
            <div className='Layouts_wrap clear clearFix'>
                <div className='left'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <SideMenu></SideMenu>
                </div>
                <div className='right'>
                    <div className='header'></div>
                </div>
            </div>
        )
    }
}

export default Layouts