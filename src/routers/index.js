import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {Provider} from 'mobx-react';
import Layouts from './Layouts'
import Login from './Login'
import store from './store'

@withRouter
class Routers extends Component {
    componentWillMount(){

    }
    componentWillReceiveProps (nextProps){
        console.log('a')
    }
    render(){
        console.log(this.props)
        return (
            <Provider Store={store}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path='/' component={Layouts}/>
                </Switch>
            </Provider>
        )
    }
}

export default Routers