var vetor = []
var i;
var num = 5
var a = 5
vetor[0] = num
for(i = 0; i < 10; i++){
   vetor[i] = a
   if(a==3){
    a = 5
   }else{
    a = 3
   }
}
console.log(vetor)