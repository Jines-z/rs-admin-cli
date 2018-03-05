import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.less';
class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
                <span>321321</span>
            </div>
        );
    }
}

export default Greeter