import {useState, useMemo} from 'react';

export default function SquareNumber () {
    const [number, setNumber] = useState(0);

    const squared = useMemo(() => {
        return number * number;
    }, [number]);

    const handleChange = (e) => {
        let value = e.target.value;
        
        value = value.replace(/^0+(?=\d)/, '');

        const newNumber = value === '' ? 0 : Number(value);
        
        setNumber(newNumber);
    };

    return (
        <>
        <h1>useMemo Example</h1>
        <input
        type="number"
        value={number}
        onChange={handleChange}
        />

        <h2>Square: {squared}</h2>
        </>
    )
}