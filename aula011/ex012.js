var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 0 && hora < 12){
    console.log(`É dia`)
} else if (hora <= 18){
    console.log(`É de tarde`)
} else{
    console.log('É de noite')
}