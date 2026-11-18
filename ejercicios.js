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



function saludar(segundos, callback) {
    setTimeout(() => {
        if (segundos < 0) {
            callback(new Error('Los segundos no pueden ser negativos'))
            return;
        };
        
    },   );
};

function mostrarSaludo(nombre) {
    console.log(`¡Hola, ${nombre}! ¿Cómo estás?`);
}
saludar('Ana', mostrarSaludo);
console.log('Esto se imprime primero');
