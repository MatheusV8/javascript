var media = 0
let str = 'Asteristico'
let acima = 0
let abaixo = 0
var num1 = 0
var maior = 0
for(var ini = 1; ini<=10; ini++){
    var ran = (Math.floor(Math.random() * 120))
    if(ran>maior){
        maior = ran  
    }
    if(ran > 18){
        acima += 1
    }
    if(ran < 5){
        abaixo += 1
    }
    if(ini<10){
        str += ran + ', '  
    }else{
        str += ran
    }
    num1 = (num1 + ran)
}
media = (num1/10)
console.log(str)
console.log(`Idade média: ${media}`)
console.log(`Quantas pessoas tem mais de 18: ${acima}`)
console.log(`Quantas pessoas tem menons de 5 anos: ${abaixo}`)
console.log(`A maior idade é: ${maior}`)
