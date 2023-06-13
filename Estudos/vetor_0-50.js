var vetor = []
var num = 5
var i;
vetor[0] = num
for(var i = 1; i < 10 ; i++){
    vetor[i] = vetor.push(i)*5
}
console.log(vetor)
