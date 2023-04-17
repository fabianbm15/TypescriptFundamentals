(() => {
  let productPrice = 100;
  productPrice = 12;
  // productPrice = 'asas'; // No es posible
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // en JS sería 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number;
  // console.log('productInStock', productInStock); // Alerta porque no ha sido asignado un valor
  // if (productInStock > 10) { // También va a tener el alert debido a que no ha sido asignado un valor
  //   console.log('is greater');
  // }
  productInStock = 10;
  console.log('productInStock', productInStock);
  let discount = parseInt('100'); // Será tipo number
  // let discount = parseInt('asas'); // Será NaN
  console.log('discount', discount);
  if (discount <= 200) {
    // No ingresa si es NaN
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff; // 4095
  console.log('hex', hex);
  let bin = 0b1010; // 10
  console.log('bin', bin);

  // const myNumber: Number = 10; // No tipar con Number
  const myNumber: number = 10; // forma correcta
})();
