(() => {
  let isEnable = true;
  // isEnable = 'as'; // mal
  // isEnable = 1212; // mal
  isEnable = false; // bien

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);

  // isNew = random >= 0.5 ? 'as' : 'as'; // mal
  // isNew = random >= 0.5 ? 'true' : 'false'; // mal
  isNew = random >= 0.5 ? true : false; // bien
  console.log('isNew', isNew);
 
  // const myBoolean: Boolean = true // no tipar con Boolean - mal
  const myBoolean: boolean = true; // bian
})();
