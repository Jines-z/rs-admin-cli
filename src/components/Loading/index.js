import React from 'react'
const  Loading = (a) => {
    // console.log(a)
    if (a.pastDelay) {
        return <div>Loading...</div>
    } else if (a.error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
}

export default Loading