import {createContext} from 'react';

/* Importaciones propias */
import {useProduct} from '../hooks/useProduct';
import {ProductCardProps, ProductContextProps} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

/* Crear context para counter, increaseBy y  product  */
export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: ProductCardProps) => {
    /* Hook para el producto */
    const {counter, increaseBy} = useProduct();

    return (
        <Provider value={{
            counter, increaseBy, product
        }}>
            <div className={styles.productCard}>
                {children}

                {/*<ProductImage img={product.img}/>

            <ProductTitle title={product.title}/>

            <ProductButtons counter={counter} increaseBy={increaseBy}/>*/}
            </div>
        </Provider>
    )
}