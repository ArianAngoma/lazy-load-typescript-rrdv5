import {useState} from 'react';

export const useProduct = (onChange?: () => void) => {
    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        setCounter(prev => Math.max(prev + value, 0));

        /* Si el onChange tiene valor, ejecutarlo */
        onChange && onChange();
    }

    return {counter, increaseBy}
}