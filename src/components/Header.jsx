import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import cartIcon from '../assets/cart.png';
import './Header.css';

export default function Header() {
  const qty = useSelector(s =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );
  const { pathname } = useLocation();

  return (
    <header className="hdr">
      <span className="logo">🌿 PlantNest</span>
      <nav>
        {pathname !== '/products' && <Link to="/products">Products</Link>}
        {pathname !== '/cart' && (
          <Link to="/cart" className="cart-link">
            <img src={cartIcon} alt="" />
            <span>{qty}</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
