const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.teclaOp')]
const teclasRes = document.querySelector('.res')
const display = document.querySelector('#display')
const on = document.querySelector('#t_on')
const clear = document.querySelector('#t_clear')
const igual = document.querySelector('#t_igual')
const copy = document.querySelector('#t_copy')
const input = document.querySelector('#text')
const aba = document.querySelector('#calc_aba')
const calc = document.querySelector('#calc')

let sinal = false
let decimal = false

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {

        sinal = false
        if(display.innerHTML == 0){
            display.innerHTML = ''
            display.innerHTML += evt.target.innerHTML
        }else{
        display.innerHTML += evt.target.innerHTML
        }
    })
})
teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {

        if(!sinal){
            sinal = true
            if(evt.target.innerHTML == ','){
                
                if(!decimal){
                    display.innerHTML += evt.target.innerHTML
                    decimal = true
                }
            }else{
            if(display.innerHTML == 0){
                decimal = false
                display.innerHTML = ''
                display.innerHTML += evt.target.innerHTML
            }else{
                decimal = false
                display.innerHTML += evt.target.innerHTML
            }
        }
        }
    })
})

clear.addEventListener('click', () => {

    decimal = false
    sinal = false
    display.innerHTML = '0'
})

igual.addEventListener('click', () => {

    decimal = false
    sinal = false
    try {
        const res = eval(display.innerHTML)
        display.innerHTML = res
    }catch {
        display.innerHTML = 'Operação inválida'
    }
    
})

copy.addEventListener('click', () => {

    console.log(display.innerHTML)
    // Mobile
    // input.select()
    // input.setSelectionRange(0,9999999)
    // navigator.clipboard.writeText(input.value)
    navigator.clipboard.writeText(display.innerHTML)
})

aba.addEventListener('click', () => {

    calc.classList.length > 1? aba.innerHTML = '>>>': aba.innerHTML = '<<<'
    calc.classList.toggle('calc_exibir')
})