import React from 'react'
import {render} from 'react-dom'
import { HashRouter } from 'react-router-dom';
import routers from './routers'
const App = () =>{
    return (
        <HashRouter children={routers}></HashRouter>
    )
}

render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept();
}