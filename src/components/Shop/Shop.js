import React, { useEffect, useState } from 'react';
import{addToDb, addToDB} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCard =(product) =>{
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-container'>
           <div className="products-container">
            {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCard={handleAddToCard}
                    ></Product>)
            }
           </div>
           <div className="card-container">
           <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;