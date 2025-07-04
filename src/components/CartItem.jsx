import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeItem } from '../redux/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} />
      <span>{item.name}</span>
      <span>₹{item.price}</span>
      <div>
        <button onClick={() => dispatch(decrement(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
      </div>
      <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
}
