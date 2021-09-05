// Definí una función tieneBloqueHorizontal que reciba como argumento un array 2d matriz y devuelva si dicha matriz tiene un bloque horizontal de 3 o más ítems consecutivos idénticos.

const tieneBloqueHorizontal = (matriz) => {
  let cuentaBloque = 0
  for(let i = 0; i < matriz.length; i++) {
      for(let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] === matriz[i][j + 1]) {
            cuentaBloque++
            if (cuentaBloque === 1 && matriz[i][j + 1] !== matriz[i][j + 2]) {
              cuentaBloque = 0
            }
      }
    }
  }
  return cuentaBloque >= 2 && true
}

console.log(tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]]))

  console.log(tieneBloqueHorizontal([
    [1, 2, 3, 4],
    [1, 2, 2, 2],
    [1, 2, 4, 5],
  ]))