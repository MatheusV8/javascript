var str = ''
var acima = 0
var divi = 0
for(var ini = 1; ini<=10; ini++){
    var ran = (Math.floor(Math.random() * 20))
    if(ran > 5){
        acima += 1
    }
    if(ran%3 == 0){
        divi += 1
    }
    if(ini<10){
        str += ran + ', '  
    }else{
        str += ran
    }
}
console.log(str)
console.log(`Números acima de 5: ${acima}`)
console.log(`Números divisivéis por 3: ${divi}`)

