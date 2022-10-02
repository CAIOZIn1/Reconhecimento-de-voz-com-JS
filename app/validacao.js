function verificaChute (chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
    }

    if (numeroMaiorQueOPermitido(numero)){
        elementoChute.innerHTML += '<div> Elemento fora do intervalo de números</div>'
    }

    if (numeroIncorretoMenor(numero)) {
        elementoChute.innerHTML += `
        <div>  O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    } else if (numeroIncorretoMaior(numero)) {
        elementoChute.innerHTML += `
        <div>  O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }

    if (numeroCorreto(numero)) {
        document.body.innerHTML = `
        <h2> Você acertou </h2>
        <h3> O número secreto era ${numeroSecreto}</h3>

        <button id='jogar-novamente' class='btn-jogar'> Jogar novamente <i class="fa-solid fa-arrows-rotate"></i> </button>
        `
    }
}

/*podemos colocar esta função dentro do if do verifaca chute
apenas coloquei ela em outra função por conta do código limpo*/
function chuteInvalido (numero) {
    return Number.isNaN(numero)
}

function numeroMaiorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function numeroIncorretoMenor(numero) {
    return numero < numeroSecreto && numero >= menorValor
}

function numeroIncorretoMaior(numero) {
    return numero > numeroSecreto && numero <= maiorValor
}

function numeroCorreto(numero) {
    return numero === numeroSecreto
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
