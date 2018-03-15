import React from 'react'
import {render} from 'react-dom'
import Routers from './routers'
const App = () =>{
    return (
        <Routers></Routers>
    )
}

render(<App />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept();
}