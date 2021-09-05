// Definí una función esMatrizCuadrada que reciba como argumento un array 2d matriz y devuelva si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas.

const esMatrizCuadrada = (matriz) => {
  for (let i = 0; i < matriz.length; i++) {
    if(matriz.length !== matriz[i].length) {
      return false
    }
  }
  return true
}

console.log(esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]))
console.log(esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],]))

