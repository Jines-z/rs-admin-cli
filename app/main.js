import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import './main.css'
render(<Greeter />, document.getElementById('root'));
if (module.hot) {
    module.hot.accept();
}