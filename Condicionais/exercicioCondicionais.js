const valorDaCompa = 100
const numeroDeParcelas = 3

if (numeroDeParcelas === 1) {
    // a vista - com 10% de desconto
    const desconto = valorDaCompa * 10 / 100
    const valorAPagar = valorDaCompa - desconto
    console.log(`Você deve pagar R$ ${valorAPagar},pois à vista tem 10% de desconto`)
} else {
    // parcela
    const valorDaParcela = (valorDaCompa / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar ${numeroDeParcelas} parcelas de R$ ${valorDaParcela}`)
}
// toFixed() - formata um número usando
// notação de ponto fixo. numObj.toFixed([digitos]) 