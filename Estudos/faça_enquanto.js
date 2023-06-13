var ini = 1
var par = 0
var media = 0
var maior = 0
var menor = 0
var n = 0
var soma = 0
var valor = 0
do{
    ini++
    var ran = (Math.floor(Math.random() * 50))
    console.log(ran)
    if(ran%2 == 0){
        par += 1
    }
    if(ran > maior){
        maior = ran
    }
    if(ran < menor){
        menor = ran
    }
    soma = soma + ran
}while(ini<5)
media = (soma/5)
console.log(`O somatório entre todos os valores é: ${soma}`)
console.log(`Menor valor digitado: ${menor}`)
console.log(`A média entre todos os valores: ${media}`)
console.log(`Quantidade de valores pares: ${par}`)