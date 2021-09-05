// Definí una función sumarImparesHasta que reciba como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

const sumarImparesHasta = (numero) => {
    let suma = 0
    for (let i = 0; i <= numero; i+=2) {
      suma += (i+1)
    }
    return suma
  }