// Aplicação de juros

const valorDaCompa = 100
const numeroDeParcelas = 12

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompa * 10 / 100
    const valorAPagar = valorDaCompa - desconto
    console.log(`Você deve pagar R$ ${valorAPagar},pois à vista tem 10% de desconto`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    // parcela sem juros
    const valorDaParcela = (valorDaCompa / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcela com juros
    const valorAPagarComJuros = (valorDaCompa * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2)
    const valorDaParcela = (valorAPagarComJuros / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em R$ ${numeroDeParcelas}x de R$ ${valorDaParcela} totalizando R$ ${valorAPagarComJuros}, devido a incidencia de juros.`)
} else {
    // numero de parcelas invalida
    console.log("Número de parcelas inválido.")
}