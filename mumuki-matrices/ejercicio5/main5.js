// Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.

const generarMatrizEscalonada = (filas) => {
  let matriz = []
  let columnas = 0
  for(let i = 0; i < filas; i++) {
    let array = []
    columnas++
    for (let j = 0; j < columnas; j++) {
      array.push(0)      
    }    
    matriz.push(array)
  }
  return matriz
  }

  console.log(generarMatrizEscalonada(3));
  console.log(generarMatrizEscalonada(5))

