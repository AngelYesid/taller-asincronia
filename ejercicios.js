//Ejercicios

// function saludarDespuesDe(nombre, callback) {
//     setTimeout(() =>{
//         callback(nombre);
//     }, 2000);
// }

// function mostrarSaludo(nombre) {
// console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
// }
// saludarDespuesDe('Ana', mostrarSaludo);
// console.log('Esto se imprime primero');


function saludarConReto(nombre, segundos, callback) {
  setTimeout(() => {
    if (segundos < 0) {
      callback(new Error('Los segundos no pueden ser negativos'), null);
      return;
    }
    callback(null, nombre);
  }, Math.max(0, segundos) * 2000);
}

saludarConReto('Ana', -2, (err, nombre) => {
  if (err) return console.error('Error:', err.message);
  console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
});
