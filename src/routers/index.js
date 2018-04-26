import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import Layouts from './Layouts'
import Login from './Login'
import store from './store'
import Cookies from 'js-cookie'

@withRouter
class Routers extends Component {
    constructor(props){
        super(props)
        this.pathname = this.props.location.pathname
    }
    checkJsessionID = () =>{
        if (this.props.location.pathname != '/login') {
            if (!Cookies.get('JSESSIONID')) {
                this.props.history.replace('/login')
            }
        } else {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home')
            }
        }
    }
    componentWillMount(){
        if (this.pathname == '/') {
            if (Cookies.get('JSESSIONID')) {
                this.props.history.replace('/home')
            } else {
                this.props.history.replace('/login')
            }
        } else {
            this.checkJsessionID()
        }
    }
    componentWillReceiveProps (){
      this.checkJsessionID()
    }
    render(){
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