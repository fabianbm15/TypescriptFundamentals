import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'product1',
  createdAt: new Date(1993, 1, 1),
  stock: 5,
});

addProduct({
  title: 'product2',
  createdAt: new Date(1993, 2, 15),
  stock: 2,
  size: 'XL',
});

products.push({
  title: 'product3',
  createdAt: new Date(1997, 10, 5),
  stock: 2,
  size: 'L',
});

const total = calcStock();

console.log('products', products);
console.log('total', total);
