import {useState} from 'react';

/* Importaciones propias */
import {onChangeArgs as ProductCountChangeArgs, ProductInCart} from '../interfaces/interfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: ProductCountChangeArgs) => {
        setShoppingCart(oldShoppingCart => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count: 0};

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            /* Borrar el producto */
            const {[product.id]: toDelete, ...rest} = oldShoppingCart;
            return rest;

            /* Otra forma */
            /*if (count === 0) {
                const {[product.id]: toDelete, ...rest} = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }*/
        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }
}