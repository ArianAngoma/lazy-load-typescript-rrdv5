/* Importaciones propias */
import {ProductButtons, ProductImage, ProductTitle, ProductCard} from '../components';
import {products} from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <ProductCard key={product.id}
                         product={product}
                         initialValues={{
                             count: 5,
                             maxCount: 15
                         }}>

                {
                    ({reset, increaseBy, isMaxCountReached, count, maxCount}) => (
                        <>
                            <ProductImage/>
                            <ProductTitle/>
                            <ProductButtons/>
                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}