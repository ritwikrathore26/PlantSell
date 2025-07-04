import React from 'react';
import aloe from '../assets/aloe.jpg';
import fern from '../assets/fern.jpg';
import monstera from '../assets/monstera.jpg';
import peace from '../assets/peace.jpg';
import snake from '../assets/snake.jpg';
import ZZ from '../assets/zz.jpg';
import PlantCard from '../components/PlantCard';
import './ProductListPage.css';

const plants = [
  { id: 1, name: 'Snake Plant', price: 299, category: 'Low‑Light', img: snake },
  { id: 2, name: 'Monstera',    price: 499, category: 'Statement', img: monstera },
  { id: 3, name: 'ZZ Plant',    price: 349, category: 'Low‑Light', img: ZZ },
  { id: 4, name: 'Peace Lily',  price: 279, category: 'Flowering', img: peace },
  { id: 5, name: 'Aloe Vera',   price: 199, category: 'Succulent', img: aloe },
  { id: 6, name: 'Boston Fern', price: 249, category: 'Hanging',   img: fern }
];

export default function ProductListPage() {
  return (
    <section className="list">
      {['Low‑Light', 'Statement', 'Flowering', 'Succulent', 'Hanging']
        .filter(cat => plants.some(p => p.category === cat))
        .map(cat => (
          <div key={cat}>
            <h2>{cat}</h2>
            <div className="grid">
              {plants
                .filter(p => p.category === cat)
                .map(p => <PlantCard key={p.id} plant={p} />)}
            </div>
          </div>
        ))}
    </section>
  );
}
