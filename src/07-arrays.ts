(() => {
  const prices = [1, 2, 3, 4, 5, 6]; // Es un array de números
  // prices.push('hola'); // No se puede porque no son números
  // prices.push(true); // No se puede porque no son números
  // prices.push({}); // No se puede porque no son números
  prices.push(7); // Sí se puede porque es un número
  console.log('prices', prices);

  const products = ['hola', true]; // array de string y boolean
  // products.push(12); // No se puede, no es string o boolean
  products.push('hola'); // Forma correcta
  console.log('products', products);

  const mixed: (number | string | boolean)[] = ['hola', true]; // array de string, number y boolean
  // const mixed: (number | string | boolean | object)[] = ['hola', true]; // array de string, number y boolean (además con object, sin embargo, también dejará poner arrays (pendiente))

  mixed.push(12); // Se puede porque se le asignaron las reglas
  mixed.push('hola');
  console.log(mixed);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  numbers.map((item) => item * 2);
  // let mixed2 = [1, 'hola', 3];
  // mixed2.map((item) => item * 2); // Muestra un alert debido a que el array también contiene strings
})();
