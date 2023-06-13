var homem = 0
var mulher = 0
var idadem = 0
var mediah = 0
var m = 0
var mediam = 0
var mediat = 0
var macima = 0
for(var ini = 1; ini <= 5; ini++){
    var ran = (Math.floor(Math.random() * 120))
    if(ran % 2 == 0){
        mediah = (mediah + ran)
        homem += 1
    }else{
        mediam = (mediam + ran)
        mulher += 1
    }
    if(ran % 2 == 1 && ran > 20){
        macima += 1
    }
    console.log(ran)
}
m = (mediah/5)
mediat = (mediah+mediam / 5)
console.log(`Quantos Homens foram cadastrados: ${homem}`)
console.log(`Quantas Mulheres foram cadastradas: ${mulher}`)
console.log(`A média de idade do grupo: ${mediat}`)
console.log(`A média de idade dos homens: ${m}`)
console.log(`Quantas Mulheres tem mais de 20 anos: ${macima}`)