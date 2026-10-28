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
*/


function dividirConPromesa(a, b) {
return new Promise((resolve, reject) => {
dividirConCallback(a, b, (err, resultado) => {
if (err) reject(err);
else resolve(resultado);
});
});
}
