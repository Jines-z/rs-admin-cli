import React from 'react';
import {render} from 'react-dom';
import Home from './routes/Home';
import './fonts/iconfont.css'
render(<Home />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}