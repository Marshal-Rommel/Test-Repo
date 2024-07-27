import React from 'react';

function Clock(){
    const time = new Date().toLocaleTimeString();

    return (
        <>
            <p style={{textAlign:"center"}}>Time: {time}</p>
        </>
    );
    
}

export default Clock;
