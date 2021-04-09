´´´js

const formulario = document.querySelector('.quiz-form')

const respostasCorretas = ['B','B','B','B']

formulario.addEventListener('submit', event => {
    event.preventDefault()

    let pontuacao = 0

    const userRespostas = [
        formulario.inputQuestion1.value,
        formulario.inputQuestion2.value,
        formulario.inputQuestion3.value,
        formulario.inputQuestion4.value,
    ]

    userRespostas.forEach((userResposta, index) => {
        if (userResposta === respostasCorretas[index]){
            pontuacao += 25
        }
    })
    console.log(pontuacao)
})

´´´
