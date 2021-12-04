import {useEffect, useState} from 'react';

/* Importaciones propias */
import {onChangeArgs, Product} from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const useProduct = ({product, onChange, value = 0}: useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        /* Si el onChange tiene valor, ejecutarlo */
        onChange && onChange({count: newValue, product});
    }

    /* Cambiar el estado si el value cambia */
    useEffect(() => {
        setCounter(value)
    }, [value]);

    return {counter, increaseBy}
}