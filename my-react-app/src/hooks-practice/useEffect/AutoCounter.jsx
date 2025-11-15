import React, {useEffect, useState} from 'react';

export default function AutoCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(c => c + 1);
        }, 1500);
    }, [count]);

    return (
        <>
        <h1>I've rendered {count} times!</h1>
        </>
    )
}