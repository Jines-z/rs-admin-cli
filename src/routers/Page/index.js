import React, {Component} from 'react'
import {Link } from 'react-router-dom'

class Page extends Component {
    render() {
        return (
            <div className='root'>
                <span>Page</span>
                <div className="veer"></div>
                <span className='iconfont icon-arrow-down'></span>
                <span className='iconfont icon-icontouxiang'></span>
                <div>
                    <Link to="/home">home</Link>
                    <Link to="/page">page</Link>
                </div>
            </div>
        )
    }
}

export default Page