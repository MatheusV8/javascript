function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = '/aula012ex/manha1.png'
        document.body.style.background = '#ae6b00'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = '/aula012ex/tarde1.png'
        document.body.style.background = '#f5aba8'
    }else {
        //BOA NOITE!
        img.src = '/aula012ex/noite1.png'
        document.body.style.background = '#4b4793'
    }
}