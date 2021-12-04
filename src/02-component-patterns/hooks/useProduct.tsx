import {useEffect, useRef, useState} from 'react';

/* Importaciones propias */
import {InitialValues, onChangeArgs, Product} from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({product, onChange, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    /* Referencia si el componente esta montado */
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        const newValue = Math.max(counter + value, 0);
        setCounter(newValue);

        /* Si el onChange tiene valor, ejecutarlo */
        onChange && onChange({count: newValue, product});
    }

    /* Cambiar el estado si el value cambia */
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    return {counter, increaseBy}
}