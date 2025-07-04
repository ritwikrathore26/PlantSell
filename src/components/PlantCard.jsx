import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector(s => s.cart.items.some(i => i.id === plant.id));

  return (
    <div className="card">
      <img src={plant.img} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>₹{plant.price}</p>
      <button disabled={inCart} onClick={() => dispatch(addToCart(plant))}>
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
