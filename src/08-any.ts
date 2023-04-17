(() => {
  let myDynamicVar: any; // Cuando la variable es any, ts permite cualquier tipo de dato (se recomienda no usarlo)
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  // myDynamicVar. // Si pongo el punto, no pone ayudas porque no sabe que tipo de dato es
  const rta = (myDynamicVar as string).toLowerCase(); // myDynamicVar será tratado como string
  console.log('rta', rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed(); // myDynamicVar será tratado como number
  console.log('rta2', rta2);
})();
