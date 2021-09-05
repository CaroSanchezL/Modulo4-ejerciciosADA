// Definí una función crearCuentaRegresiva que reciba como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.

const crearCuentaRegresiva = (numeroInicial) => {
    const arrayRegresivo = [];
    for(let i = numeroInicial; i >= 0; i--) {
      arrayRegresivo.push(i)
    }
    return arrayRegresivo
  }