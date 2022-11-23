// Ej. 1.1
function isTrue() {
  return true;
}

// Ej. 1.2
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    return resolve();
  } else {
    return reject({
      message: "\n'Ejecutamos el mensaje de error de la promesa'"
    });
  }
});

myPromise
  .then(() => setTimeout(() => console.log("Hola, soy una promesa"), 5000))
  .catch((error) =>
    console.error(
      `[myPromise] Error en la ejecución de la promesa: ${error.message}.`
    )
  );

// Ej. 1.3
function* idGenerator() {
  let id = 0;
  while (true) {
    if (id % 2 == 0) {
      yield id;
      id++;
    }
    id++;
  }
}

const id = idGenerator();

console.log(id.next());
