import React, {Component} from 'react'
import { Route, Redirect} from 'react-router-dom'
import './Layouts.less'
import logo from './assets/logo.png'
import SideMenu from '../../components/SideMenu'
import routerConfig from '../../config/routes'

class Layouts extends Component {
    render() {
        const {history} = this.props
        return (
            <div className='Layouts_wrap clear clearFix'>
                <div className='left'>
                    <div className='logo'>
                        <img src={logo} />
                    </div>
                    <SideMenu history={history}></SideMenu>
                </div>
                <div className='right'>
                    <div className='header'></div>
                    {routerConfig.map((item,i)=>
                        <Route key={i} path={item.path} component={item.component} exact/>
                    )}
                </div>
            </div>
        )
    }
}

export default Layouts