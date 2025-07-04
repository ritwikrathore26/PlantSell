import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { clearCart } from '../redux/cartSlice';
import './CartPage.css';

export default function CartPage() {
  const { items } = useSelector(s => s.cart);
  const dispatch = useDispatch();

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalCost = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      <p>Total Plants: {totalQty}</p>
      <p>Total Cost: ₹{totalCost}</p>

      {items.map(i => <CartItem key={i.id} item={i} />)}

      {items.length ? (
        <>
          <button onClick={() => alert('Checkout coming soon!')}>Checkout</button>
          <button onClick={() => dispatch(clearCart())}>Empty Cart</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <Link to="/products"><button>Continue Shopping</button></Link>
    </section>
  );
}
