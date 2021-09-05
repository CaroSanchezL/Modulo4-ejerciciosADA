// Definí una función tieneBloqueVertical que tome una matriz y devuelva si la misma tiene un bloque vertical  de 3 o más ítems consecutivos idénticos

const tieneBloqueVertical = (matriz) => {
    let cuentaBloque = 0
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            if (matriz[i + 1] !== undefined && matriz[i][j] === matriz[i + 1][j]) {
              cuentaBloque++
              if (cuentaBloque === 1 && matriz[i + 1][j] !== matriz[i + 2][j]) {
                cuentaBloque = 0
              }
        }
      }
    }
    return cuentaBloque >= 2 && true
  }

  console.log(tieneBloqueVertical([
    [4, 2, 3],
    [1, 5, 3],
    [1, 2, 3],
  ]))

  console.log(tieneBloqueVertical([
    [1, 2, 3, 4],
    [7, 2, 9, 2],
    [1, 8, 4, 5],
  ]))