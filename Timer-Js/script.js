const data_display = document.querySelector('.data')
const div_relogio = document.querySelector('.relogio')
const input = document.querySelector('#alarme')
const ativar = document.querySelector('.ativar')
const parar = document.querySelector('.parar')
const hora_label = document.querySelector('.hora_alarme')
const input_hora = document.querySelector('#alarme_hora')
const alarme_minuto = document.querySelector('#alarme_minuto')

let som_alarme = new Audio('alarm-clock-short-6402.mp3')
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

ativar.addEventListener('click', () => {

    ts_atual = Date.now()
    ts_alarme = ts_atual + (input_hora.value*3600000) + (alarme_minuto.value*60000) + (input.value * 1000)
    alarme_ativado = true

    const dt_alarme = new Date(ts_alarme)
    let hora = dt_alarme.getHours()
    hora = hora < 10 ? '0' + hora:hora
    let minuto = dt_alarme.getMinutes()
    minuto = minuto < 10 ? '0' + minuto:minuto
    let secundos = dt_alarme.getSeconds()
    secundos = secundos < 10 ? '0' + secundos:secundos
    
    hora_label.innerHTML = `Hora alarme: ${hora}:${minuto}:${secundos}`
})

parar.addEventListener('click', ()=> {

    alarme_ativado = false
    alarme_tocando = false
    input.value = ''
    input_hora.value = ''
    alarme_minuto.value = ''
    hora_label.innerHTML = 'Hora do alarme:'
    som_alarme.pause()
    som_alarme.currentTime = 0
    div_relogio.classList.remove('alarme')
})

const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? '0' + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? '0' + mes : mes

data_display.innerHTML =dia + '/' + mes + '/' + data.getFullYear()

function relogio(){

    const data = new Date
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()

    hora = hora < 10 ? '0' + hora : hora
    minuto = minuto < 10 ? '0' + minuto : minuto
    segundo = segundo < 10 ? '0' + segundo : segundo

    div_relogio.innerHTML = hora + ':' + minuto + ':' + segundo

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            div_relogio.classList.add('alarme')
        }
    }
}

const intervalo = setInterval (relogio,1000)