const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', (evento) => {
    const chute = evento['results'][0][0]['transcript']
    exibeChuteNaTela(chute)
    verificaChute(chute)
})

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div> Você disse: </div>
    <span class='box'> ${chute} </span>   
    `
}

recognition.addEventListener('end', () => recognition.start())
