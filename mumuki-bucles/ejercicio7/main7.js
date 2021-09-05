// Definí una función repetirLetras que reciba como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.

const repetirLetras = (palabra, cantidad) => {
    const arrayNuevo = []
    for(let i = 0; i < palabra.length; i++) {
      for(let j = 0; j < cantidad; j++) {
        arrayNuevo.push(palabra.charAt(i))
      }
    }
    return arrayNuevo.join("")
  }