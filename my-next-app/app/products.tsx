import React from 'react';
import { Product } from './cart'; // Importing the Product type

const products: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    price: 29.99,
    image: '',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 39.99,
    image: '',
  },
  // Add more products as needed
];

const Products: React.FC<{ addToCart: (product: Product) => void }> = ({ addToCart }) => {
  return (
    <div>
      <h1>Product Listings</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
           
           
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
