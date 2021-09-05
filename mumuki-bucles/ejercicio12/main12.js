// Definí una función esPalindromo que tome una palabra y devuelva si dicha palabra es palíndroma, es decir, si puede leerse de igual manera de izquierda a derecha  que de derecha a izquierda .

const esPalindromo = (string) => {
    const array = string.split("")
    const array2 = string.split("").reverse()

    for(let i = 0; i < array.length; i++) {
        if (array[i] !== array2[i]) {
            return false
        }
        }
        return true
    }