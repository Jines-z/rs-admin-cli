import React, {Component} from 'react'
import './Home.less';
import a from './a.png'
class Home extends Component {
    render() {
        return (
            <div className='root'>
                <span>asdadaasdadas</span>
                <img src={a} alt=""/>
                <div className="veer"></div>
                <span className='iconfont icon-arrow-down'></span>
                <span className='iconfont icon-icontouxiang'></span>
            </div>
        );
    }
}

export default Home