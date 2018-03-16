import React, {Component} from 'react'
import './Home'
class Home extends Component {
    ad = () =>{
        this.props.history.replace('/functionManage/functionList')
    }
    render() {
        return (
            <div className='root' onClick={this.ad}>
               home
            </div>
        )
    }
}

export default Home