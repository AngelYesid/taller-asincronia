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