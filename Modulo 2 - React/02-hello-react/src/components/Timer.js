import {useEffect, useState} from 'react';

export default function Timer() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setValue(currentValue => currentValue + 1)
        },1000);
    }, [])

    return(
        <span className="bg-green-300 font-bold p-2"> 
            {value}
        </span>
    )
}