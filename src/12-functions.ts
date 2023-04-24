(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'; // Alias type

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log('producto1', producto1);
  console.log('producto1.title', producto1.title);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log('producto2', producto2);
  console.log('producto2.title', producto2.title);
})();
