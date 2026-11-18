# Parte 1:
- Predicción: primero se ejecuta el primer console.log, luego saltará del segundo al tercero, y por último ejecutara el segundo.

## Preguntas de analisis.
1. Se imprime de la misma forma, el 1, 3 y 2, no cambia el orden, pero se demora más tiempo en imprimir el 2 final

2. Menciona dos operaciones de una aplicación real (por ejemplo, una app de domicilios) que
deberían ser asíncronas y explica por qué.
- Consultar el catálogo de restaurantes o productos: Requiere una petición de red a la base de datos o API externa. Debe ser asíncrona para que la interfaz no se congele mientras cargan las fotos y precios.

- Procesar el pago con la pasarela financiera: Es una transacción de red externa que puede tomar segundos en responder. Si fuera síncrona, el cliente no podría cancelar ni ver ninguna animación de carga.


# Parte 2:
1. sin el return, el código seguiría y llamaría dos veces al callback
2. Por estandarización en el ecosistema.

# Parte 3:
1. El tiempo total es de 2 segundos porque las tareas se ejecutan de manera simultanea, en vez de sumar todos los segundos, espera a que termine la tarea mas lenta.
2. 

# Parte 4:
1. Porque retoma Promise, no texto.
2. 
- Secuencia: perfil de usuario, ciudad, clima.
- Paralelo: noticias del dia.

# Caso de estudio.
1. En la versión 3 los mensajes aparecen prácticamente al mismo tiempo y no esperan el uno al otro porque se invocaron de forma concurrente sin usar la palabra clave await entre ellos, haciendo que cada llamada inicie su temporizador de forma independiente sin bloquear la ejecución.

2. Para que se consulten en orden estricto uno después del otro, se debe utilizar un ciclo for...of sobre un arreglo de IDs dentro de una función asíncrona, anteponiendo await a cada llamada para detener temporalmente el ciclo hasta que la promesa anterior se resuelva por completo.

3. Agregar la tabla de cargos fue mucho más fácil en la Versión 3 con async/await, ya que permitió escribir las llamadas de manera completamente lineal guardando cada resultado en constantes independientes, evitando la pirámide de callbacks de la primera versión y la engorrosa necesidad de usar variables temporales externas para transportar datos entre los .then() de la segunda.