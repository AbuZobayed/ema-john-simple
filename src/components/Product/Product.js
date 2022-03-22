import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product,handleAddToCard} = props;
    const {name , img , seller , price , ratings} = product;

    
    return (

        <div className='product'>
            <img src={img} alt="product-img" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>

            <p><small>Seller:{seller}</small></p>
            
            <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button 
            onClick={() => handleAddToCard(product)}
             className='btn-card'>
                <p>Add Card</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;