const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio () {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

document.querySelector('.menor-valor').innerText = menorValor
document.querySelector('.maior-valor').innerText = maiorValor

