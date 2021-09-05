// Definí una función repetir que tome un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces. 

const repetir = (valor, cantidad) => {
    const arrayRepetido = []
    for (let i = 0; i < cantidad; i++) {
      arrayRepetido.push(valor)
    }
    return arrayRepetido
  }