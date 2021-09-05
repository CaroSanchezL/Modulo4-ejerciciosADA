// Definí una función esSubconjunto que tome por parámetro dos arrays, subconjunto y conjunto, y devuelva si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto

const esSubconjunto = (subconjunto, conjunto) => {
  let conjuntoIncluyeSubconjunto = true
  for (let i = 0; i < subconjunto.length; i++) {
      if (!conjunto.includes(subconjunto[i])) {
          conjuntoIncluyeSubconjunto = false
      }
  }
  return conjuntoIncluyeSubconjunto
}