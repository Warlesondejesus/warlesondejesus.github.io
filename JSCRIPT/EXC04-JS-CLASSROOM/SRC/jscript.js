const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const apagada = document.getElementsByClassName('desligada')[0]


    if(apagada.classList.contains('ligada')){
        apagada.classList.remove('ligada')
        btn.textContent = 'Ligar'
    } else {
        apagada.classList.add('ligada')
        btn.textContent = 'Desligar'
    }

})