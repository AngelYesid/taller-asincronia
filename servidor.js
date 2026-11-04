//                  Ejemplos de callbacks

/*console.log('1. Pido la pizza');
setTimeout(() => {
console.log('2. La pizza está lista');
}, 2000); // ¡cero milisegundos!
console.log('3. Mientras tanto, veo televisión');
*/



/*
const esperar = (ms, mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(mensaje);
            resolve("Ya termine")
        }, ms);
    })
}

const main = async () => {
    try {
        console.log('pizza xd')
        await esperar(3000, "pido la puta pizza")
        await esperar(5, "Mientras tanto, veo la televisión")
        await esperar(0, "La pizza está lista perra")
        console.log('coma mierda');
    } catch (error) {
        console.log(error);
    }

}

main()
*/



/*
function recibirMensaje(callback) {
console.log('Esperando mensaje en WhatsApp...');
setTimeout(() => {
console.log('Mensaje recibido');
callback(); // se llama solo cuando el mensaje llegó
}, 3000);
}
function leerMensaje() {
console.log('Leyendo mensaje...');
}
recibirMensaje(leerMensaje);
console.log('Sigo usando el celular');
*/


/*
function dividir(a, b, callback) {
setTimeout(() => {
if (b === 0) {
callback(new Error('No se puede dividir entre cero'), null);
return; // sin este return, el código seguiría y llamaría dos veces al callback
}
callback(null, a / b);
}, 1000);
}
dividir(100, 2, (err, resultado) => {
if (err) {
console.log('Error:', err.message);
return;
}
console.log('Resultado:', resultado);
});
*/


//                    Ejemplos de promesas
/*

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error('No se puede dividir entre cero'));
            } else {
                resolve(a / b);
            }
        }, 1000);
    });
};

dividir(10, 2)
    .then((resultado) => console.log('Resultado:', resultado))
    .catch((err) => console.log('Error:', err.message))
    .finally(() => console.log('Operación terminada'));

///////////////////////////////////////////////////////////////////////////////////

function dividirConPromesa(a, b) {
    return new Promise((resolve, reject) => {
        dividirConCallback(a, b, (err, resultado) => {
            if (err) reject(err);
            else resolve(resultado);
        });
    });
};

dividir(10, 5)
    .then((resultado) => console.log('Resultado:', resultado))
    .catch((err) => console.log('Error:', err.message))
    .finally(() => console.log('Operación terminada'));
*/


/*
llegada = 0
const esperar = (ms, valor) =>
    new Promise((resolve) => setTimeout(() => resolve(valor), ms));
console.time('total');
Promise.all([esperar(2000, 'A'), esperar(1000, 'B'), esperar(1500, 'C')])
    .then((resultados) => {
        console.log(resultados); // ['A', 'B', 'C'] en el orden del arreglo, no en el de
        llegada
        console.timeEnd('total'); // unos 2 segundos, no 4.5
    });
*/





//Parte 4, Async/await: la tercera respuesta
/*async function saludar() {
    return 'Hola';
}
console.log(saludar()); // Promise { 'Hola' }, no el texto
saludar().then((texto) => console.log(texto)); // Hola
*/

/*

const esperar = (ms, valor) =>
new Promise((resolve) => setTimeout(() => resolve(valor), ms));
// Secuencial: unos 3 segundos (1 + 2), aunque las tareas no dependen entre sí
async function secuencial() {
const clima = await esperar(1000, 'Soleado');
const noticias = await esperar(2000, '5 noticias');
console.log(clima, noticias);
}
// Paralelo: unos 2 segundos, porque ambas tareas arrancan al tiempo
async function paralelo() {
const [clima, noticias] = await Promise.all([
esperar(1000, 'Soleado'),
esperar(2000, '5 noticias'),
]);
console.log(clima, noticias);
};



*/
/*

async function saludar() {
return 'Hola';
}
console.log(saludar()); // Promise { 'Hola' }, no el texto
saludar().then((texto) => console.log(texto)); // Hola
*/
// datos.js — "base de datos" simulada, compartida por las tres versiones
const empleados = [
{ id: 1, nombre: 'Miguel' },
{ id: 2, nombre: 'Yenny' },
{ id: 3, nombre: 'MCamila' },
];
const salarios = [
{ id: 1, salario: 1000, idempleado: 1 },
{ id: 2, salario: 2000, idempleado: 2 },
];
module.exports = { empleados, salarios };



const { empleados, salarios } = require('./datos');
const obtenerEmpleado = (id, callback) => {
setTimeout(() => {
const empleado = empleados.find((e) => e.id === id);
if (!empleado) {
callback(new Error(`El empleado con id ${id} no existe`), null);
return;
}
callback(null, empleado);
}, 500);
};
const obtenerSalario = (empleado, callback) => {
setTimeout(() => {
const registro = salarios.find((s) => s.idempleado === empleado.id);
if (!registro) {

callback(new Error(`El empleado ${empleado.nombre} no tiene salario`), null);
return;
}
callback(null, registro.salario);
}, 500);
};
obtenerEmpleado(1, (err, empleado) => {
if (err) return console.log(err.message);
obtenerSalario(empleado, (err, salario) => {
if (err) return console.log(err.message);
console.log(`El empleado ${empleado.nombre} gana ${salario} dólares`);
});
});