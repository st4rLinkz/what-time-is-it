var nome = window.prompt('Qual é o seu nome?')

while (nome === null || nome === ``) {
    alert('Por favor, digite um nome!')
    var nome = window.prompt('Qual é o seu nome?')
}

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    // var hora = 11 // linha utilizada para testes

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    // msg.innerHTML = `Agora são ${hora} horas.` // linha utilizada para testes
    if (hora >= 0 && hora < 6) {
        // BOA MADRUDAGA!
        msg.innerHTML += `<p>Boa madrugada, <b>${nome}</b>!</p>`
        img.src = `imagens/midnight.png`
        document.body.style.background = 'linear-gradient(to right, rgb(7, 12, 45), rgb(0, 0, 0))'
    } else if (hora < 12) {
        // BOM DIA!
        msg.innerHTML += `<p>Bom dia, <b>${nome}</b>!</p>`
        img.src = 'imagens/morning.png'
        document.body.style.background = 'linear-gradient(to left, rgba(255, 255, 54, 0.4), 45%, rgba(224, 149, 187, 0.7))'
        document.body.style.color = '#1e1e20'
    } else if (hora < 16) {
        // BOA TARDE!
        msg.innerHTML += `<p>Boa tarde, <b>${nome}</b>!</p>`
        img.src = 'imagens/noon.png'
        document.body.style.background = 'linear-gradient(to right,rgb(106, 106, 255), rgba(255, 214, 131, 0.842))'
    } else if (hora < 19) {
        // BOA TARDE! (anoitecendo)
        msg.innerHTML += `<p>Boa tarde, <b>${nome}</b>!</p>`
        img.src = 'imagens/afternoon.png'
        document.body.style.background = 'linear-gradient(to left, rgba(255, 177, 87, 0.882), 45%, rgb(86, 30, 0))'
    } else {
        // BOA NOITE!
        msg.innerHTML += `<p>Boa noite, <b>${nome}</b>!</p>`
        img.src = 'imagens/night.png'
        document.body.style.background = 'linear-gradient(to right, rgb(0, 1, 38), 65%, rgb(24, 0, 36))'
    }
}