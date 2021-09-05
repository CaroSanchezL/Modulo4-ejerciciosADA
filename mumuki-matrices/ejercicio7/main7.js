// Definí una función obtenerCantidad que tome un valor cualquiera item y una matriz items y devuelva la cantidad de veces que item se encuentra dentro de items

const obtenerCantidad = (item, items) => {
  let cantidad = 0
  for (let i = 0; i < items.length; i++) {
    for(let j = 0; j < items[i].length; j++) {
      if (item === items[i][j]) {
        cantidad++
      }
    }
  }
  return cantidad
}

console.log(obtenerCantidad('1', [
  ['1', '2', '3', '3'],
  ['3', '1'],
  ['1', '2', '3'],
  ['2', '3', '1', '3'],
]))