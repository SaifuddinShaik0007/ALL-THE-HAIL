"use client";

import React, { useState } from 'react';
import Products from './products';
import Cart from './cart';
import Checkout from './checkout';
import { Product } from './cart';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>E-Commerce Application</h1>
      <Products addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default App;
