function contar(){
    var contagem = document.querySelectorAll('div#contagem')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    res.innerHTML = 'Impossível contar!'
    window.alert('[ERRO] faltam dados!')
    
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p<= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contagem crescrente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F92B} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F92B} `
            }
        res.innerHTML += `\u{1F601}`
        }
    }
        
     

    /*if(ini<fim){
        for (ini = ini ; ini <= fim; ini += pas){
            res.InnerHTML = `Contando:${ini}`
        }
    } else {
        for(ini = ini; fim <= ini; ini -= pas){
            res.InnerHTML = `Contando:${ini}`
        }
    }*/
}
