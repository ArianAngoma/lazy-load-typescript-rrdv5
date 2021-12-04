import {createContext, CSSProperties, ReactElement} from 'react';

/* Importaciones propias */
import {useProduct} from '../hooks/useProduct';
import {Product, ProductContextProps} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

/* Crear context para counter, increaseBy y  product  */
export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: () => void;
}

export const ProductCard = ({children, product, className, style, onChange}: Props) => {
    /* Hook para el producto */
    const {counter, increaseBy} = useProduct(onChange);

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div className={`${styles.productCard} ${className}`}
                 style={style}>
                {children}
            </div>
        </Provider>
    )
}