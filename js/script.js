
function tabuada() {
    let num = document.querySelector('#num')
    let end = document.querySelector('#end')
    let result = document.querySelector('.resposta')
    
    let n = Number(num.value)
    let e = Number(end.value)
    let r = ''
    let x = 0

    if (n == '' || e =='') {
        alert('[ERRO!] Confira os dados!')
    } else {

        result.innerHTML = `A tabuada de ${n} é:<br>`
        
        do {
           r= n * x
           result.innerHTML+= `${n} X ${x} = ${r}<br>`
           x++
        } while(x <= e)
    }
    
}