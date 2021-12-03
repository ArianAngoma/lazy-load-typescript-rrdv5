import {useContext} from 'react';

/* Importaciones propias */
import noImage from '../assets/no-image.jpg';
import {ProductContext} from './ProductCard';

import styles from '../styles/styles.module.css';

interface Props {
    img?: string;
    className?: string;
}

export const ProductImage = ({img, className}: Props) => {
    const {product} = useContext(ProductContext);

    let imgToShow: string;

    if (img) imgToShow = img;
    else if (product.img) imgToShow = product.img;
    else imgToShow = noImage;

    return (
        <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="ProductImage"/>
    )
}