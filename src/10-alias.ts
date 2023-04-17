(() => {
  //Alias types
  type UserId = string | number | boolean; // Alias type
  let userId: UserId;

  // Literal types
  // let shirtSize: string; // Permite asignar cualquier string
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'; // Alias type
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize = 'asasasasa'; // De este modo nos dará error debido a que no cumple la regla
  // shirtSize = "s" // No funciona debido a que es literalmente "S"
  shirtSize = 'S';
  shirtSize = 'XS';

  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(
        `number: El id es ${userId.toLowerCase()}, el tamaño de la camisa es ${size}`
      );
    }
  }

  // greeting(1111, 'asasasa'); // No funciona porque no cumnple con las reglas
  greeting('10JUvc', 'S');
})();
