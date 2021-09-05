// Definí una función obtenerFilaMasLarga que reciba como argumento un array 2d matriz y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, debe devolver el primero de ellos.

const obtenerFilaMasLarga = (matriz) => {
  let filaMasLarga
  let longitud = 0
  for (let i = 0; i < matriz.length; i++) {
    if (matriz[i].length > longitud) {
      longitud = matriz[i].length;
      filaMasLarga = matriz[i]
    }
  }
  return filaMasLarga
}

console.log(obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]));
console.log(obtenerFilaMasLarga([[1], [3, 7], [6, 8]]))