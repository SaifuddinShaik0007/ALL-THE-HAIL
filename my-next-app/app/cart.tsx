import React from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Cart: React.FC<{ cartItems: Product[]; removeFromCart: (id: number) => void }> = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h2>{item.title} - ${item.price.toFixed(2)}</h2>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
