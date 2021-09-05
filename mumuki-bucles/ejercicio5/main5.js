// Definí una función invertir que tome por parámetro un array array y que devuelva un array con los mismos valores pero en orden invertido.

const invertir = (array) => {
    const arrayInvertido = []
    for(let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i])
    }
    return arrayInvertido
  }