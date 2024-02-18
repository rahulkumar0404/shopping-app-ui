import { DUMMY_PRODUCTS } from '../dummy_projects';
import Product from './Product.jsx';


export default function Shop ({ onAddItemToCart }) {
  console.log(DUMMY_PRODUCTS);
  return (
    <section id="shop">
      <h1>Elegant Shopping For Everyone</h1>
      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={onAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
};
