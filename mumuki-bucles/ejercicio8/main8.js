// Definí una función capitalizarPalabras tome un string y devuelva un string donde cada palabra está capitalizada (con la primera letra mayúscula). Dejá las demás letras como están.

const capitalizarPalabras = (string) => {
    const arrayPalabras = string.split(" ");
    const arrayCapitalizado = []
    for(let i = 0; i < arrayPalabras.length; i++) {
        arrayCapitalizado.push((arrayPalabras[i].charAt(0).toUpperCase()) + arrayPalabras[i].slice(1))
    }

    return arrayCapitalizado.join(' ')
}