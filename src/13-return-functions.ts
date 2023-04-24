(() => {
  // // Se infiere que se pasa un number, si se quiere pasar un string, debe cambiarse
  // const calcTotal = (prices: number[]): number => {
  //   let total = 0;
  //   prices.forEach((item) => {
  //     total += item;
  //   });
  //   return total;
  // };
  // const rta = calcTotal([1, 2, 1, 1, 1]);
  // console.log('rta', rta);

  // De este modo se pasa un string
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([1, 2, 1, 1, 1]);
})();
