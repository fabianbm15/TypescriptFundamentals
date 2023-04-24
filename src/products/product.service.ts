import { Product } from './product.model';

export const products: Product[] = []; // Solo recibirá valores que tengan esta estructura

export const addProduct = (data: Product) => {
  // La data que recibirá tiene la estructura del type Product
  products.push(data);
};

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
};
