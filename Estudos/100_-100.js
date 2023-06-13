var ini = 100
var fim = -100
do{
    if(ini % 5 == 0 && ini % 10 != 0){
        console.log(ini)
    }
    ini -= 1 
} while(ini > fim)