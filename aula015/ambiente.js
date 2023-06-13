let num = [5, 8, 4, 3, 7]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
num[3] =  2
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
for(let pos=0; pos < num.length; pos++){
    console.log(num[pos])
}
