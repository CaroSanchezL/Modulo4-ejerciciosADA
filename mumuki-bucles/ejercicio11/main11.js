// Definí una función tieneBloque que tome por parámetro un array array y devuelva si dicho array tiene un bloque de 3 o más ítems consecutivos idénticos.

const tieneBloque = (array) => {
    let cuentaBloque = 0
    for(let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            cuentaBloque++
            if (cuentaBloque === 1 && array[i + 1] !== array[i + 2]) {
                cuentaBloque = 0
            }
        }
        
    }

    return cuentaBloque >= 2 && true
}
