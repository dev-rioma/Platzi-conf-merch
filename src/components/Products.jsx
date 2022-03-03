import React from 'react';
import Product from "./Product";
import '../styles/components/Products.css';

function Products({products})  {
    return (
        <div className='Products'>
            <div className='Products-items'>
                {products.map(product => (
                    <Product Key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;