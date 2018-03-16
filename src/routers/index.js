import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Layouts from './Layouts'


const routers = (
    <Switch>
        <Route path="/" component={Layouts}/>
    </Switch>
)

export default routers