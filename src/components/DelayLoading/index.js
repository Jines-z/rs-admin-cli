import React from 'react'
const  DelayLoading = ({ pastDelay, error }) => {
    if (pastDelay) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
}
export default DelayLoading