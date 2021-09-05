// Definí una función removerDuplicados que tome por parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

const removerDuplicados = (array) => {
    array.sort()
    let arrayNuevo = []
    for (let i = 0; i < array.length; i++) {
      if(array[i] !== array[i+1]) {
        arrayNuevo.push(array[i])
      }
    }
    return arrayNuevo
 }