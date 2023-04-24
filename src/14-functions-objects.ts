(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  // login('nico@nico.co', '121212');
  login({
    email: 'nico@nico.co',
    password: 121212,
  });

  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'; // Alias type

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

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

  console.log('products', products);
})();
