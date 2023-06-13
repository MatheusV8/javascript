var mulher = 0
var homem = 0
var media = 0
var maior = 0
var pesot = 0
var pesado = 0
for(var ini = 0; ini < 8; ini++ ){
    var ran = (Math.floor(Math.random() * 2))
    console.log(ran)
    if(ran == 1){
        mulher += 1
        var pesom = (Math.floor(Math.random() * 120))
        pesot += pesom
        console.log(`Peso da mulher: ${pesom}`)
    }else{
        homem += 1
        var pesoh = (Math.floor(Math.random() * 120))
        console.log(`Peso: ${pesoh}`)
        if(pesoh > 100){
            var pesado = +1
        }
        if(pesoh>maior){
            maior = pesoh
        }
    }
    
}
console.log(`PesoM: ${pesot}`)
console.log(`quantidade de mulheres ${mulher}`)
media = (pesot / mulher)
console.log(`Quantidade de mulheres cadastradas: ${mulher}`)
console.log(`Quantidade de homens pesam mais de 100kg: ${pesado}`)
console.log(`A média de peso entre as mulheres é:${media}`)
console.log(`O maior peso entre os homens foi: ${maior}`)