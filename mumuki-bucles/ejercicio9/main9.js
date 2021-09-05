// Definí una función sumarSeccion que reciba como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.


const sumarSeccion = (array, comienzo, cantidad) => {
    let suma = 0
    for(let i = comienzo; i < (comienzo + cantidad) ; i++) {
        suma += array[i]
    }
  return suma
}

console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3))