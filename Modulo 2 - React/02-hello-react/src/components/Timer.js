import {useEffect, useState} from 'react';

export default function Timer() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(currentValue => currentValue + 1)
        },1000);

        return () => {
            console.log("Limpando interval...")
            clearInterval(interval);
        }

    }, [])

    return(
        <span className="bg-green-300 font-bold p-2"> 
            {value}
        </span>
    )
}