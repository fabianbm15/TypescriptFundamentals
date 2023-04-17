(() => {
  // let myNumber: number = undefined; // mal
  // let myString: string = null; // mal
  // let myNull = null; // tipo any
  // let myUndefined = undefined; // tipo any
  let myNull: null = null; // tipo null
  let myUndefined: undefined = undefined; // tipo undefined

  let myNumber: number | null = null;
  myNumber = 12;
  let myString: string | undefined = undefined;
  myString = 'asasa';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiv2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }
  hi('Nicolás');
  hi(null);
  hiv2('Nicolás');
  hiv2(null);
})();
