// Definí una función sumar que reciba una matriz de números  y devuelva la suma de todos los números de dicha matriz.

const sumar = (matriz) => {
  let resultado = 0;
  for(let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      resultado += matriz[i][j]
    }
  }
  return resultado
}

console.log(sumar([[4, 5],[2, 7, 1],[8, 10],]))