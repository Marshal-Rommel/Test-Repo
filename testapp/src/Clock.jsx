import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(
        function setupInterval() {
            const intervalId = setInterval(function updateTime() {setTime(new Date().toLocaleTimeString());}, 1000);   
            return function cleanup() {clearInterval(intervalId)};
      }
    );

    return <p style={{ textAlign: 'center' }}>Time: {time}</p>;
}
export default Clock;
