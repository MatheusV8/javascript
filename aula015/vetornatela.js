let valores = [8, 2, 4, 7, 9]
for(pos=0; pos< valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
valores.sort()
for(let pos in valores){
    console.log(valores[pos])
}
valores.indexOf(4)
