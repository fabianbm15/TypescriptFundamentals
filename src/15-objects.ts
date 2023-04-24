(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'; // Alias type
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }; // Alias type de Product

  const products: Product[] = []; // Solo recibirá valores que tengan esta estructura

  const addProduct = (data: Product) => {
    // La data que recibirá tiene la estructura del type Product
    products.push(data);
  };

  // En este caso es opcional enviar size, esto porque está definida en el type, de este modo: size?
  addProduct({
    title: 'product1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
  });

  addProduct({
    title: 'product2',
    createdAt: new Date(1993, 2, 15),
    stock: 12,
    size: 'XL',
  });

  products.push({
    title: 'product3',
    createdAt: new Date(1997, 10, 5),
    stock: 2,
    size: 'L',
  });

  console.log('products', products);
})();
