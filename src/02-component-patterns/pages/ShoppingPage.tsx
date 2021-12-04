import {useState} from 'react';

/* Importaciones propias */
import {ProductButtons, ProductImage, ProductTitle, ProductCard} from '../components';
import {onChangeArgs as ProductCountChangeArgs, Product} from '../interfaces/interfaces';

import '../styles/custom-styles.css';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({count, product}: ProductCountChangeArgs) => {
        setShoppingCart(oldShoppingCart => {
            /* Eliminar el producto llega a 0 */
            if (count === 0) {
                const {[product.id]: toDelete, ...rest} = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }
        })
    }

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard key={product.id}
                                     product={product}
                                     className="bg-dark text-white"
                                     onChange={onProductCountChange}>
                            <ProductImage className="custom-image"
                                          style={{
                                              boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
                                          }}/>
                            <ProductTitle className="text-bold"/>
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }

            </div>

            <div className="shopping-cart">
                <ProductCard product={product2}
                             className="bg-dark text-white"
                             style={{width: '100px'}}>
                    <ProductImage className="custom-image"
                                  style={{
                                      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
                                  }}/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard product={product1}
                             className="bg-dark text-white"
                             style={{width: '100px'}}>
                    <ProductImage className="custom-image"
                                  style={{
                                      boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
                                  }}/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            </div>

            <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div>
        </div>
    )
}