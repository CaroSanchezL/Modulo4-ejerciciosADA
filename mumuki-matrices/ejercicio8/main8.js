// Definí una función convertirEnMatriz que reciba como argumentos un número entero columnas y un array array y devuelva una matriz con los items de array y la cantidad de columnas columnas por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems que agregar.

const convertirEnMatriz = (columnas, array) => {
    let matriz = [];
    for(let i = 0; i < columnas; i++) {
        if (array.length !== 0) {
        matriz.push(array.splice(0, columnas));
        }     
    }
    return matriz
}

console.log(convertirEnMatriz(2, [1, 2, 3, 4]));
console.log(convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7]))
console.log(convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))