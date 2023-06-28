var f1 = 0
var f2 = 1
var ptf = []
ptf = [1]
    for(var i = 1; i < 16; i++){
        ptf[i] = f1 + f2
        f1 = f2
        f2 = ptf[i] 
    }
    console.log(ptf)
/*
var
   C, F1, F2, PTF : Inteiro
inicio
      F1 <- 0
      F2 <- 1
      PTF <- 0
      Escreva(F1)
      Escreva(F2)
      Para C <- 1 ate 15 faca
           PTF <- F1 + F2
           Escreva(PTF)
           F1 <- F2
           F2 <- PTF
      FimPara
Fimalgoritmo
*/