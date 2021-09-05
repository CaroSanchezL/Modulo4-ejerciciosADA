// Definí una función generarGrilla que tome por parámetro un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

const generarGrilla = (filas, columnas, items) => {
  let matriz = []  
  for (let i = 0; i < filas; i++) {
    let array = []
    for (let j = 0; j < columnas; j++) {
      let itemAPushear = items[Math.round(Math.random() * (items.length - 1))]
      array.push(itemAPushear)      
    }    
    matriz.push(array)
  }
  return matriz
}

console.log(generarGrilla(2, 3, [1, 2]));
console.log(generarGrilla(3, 3, ['a', 'b', 'c']))

// me tiene que pushear 3 items en dos arrays, o dos arrays de 3 items cada uno