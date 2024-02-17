let resultado = document.querySelector('.resultado_container')
let imc = []
let calcular = document.querySelector('.calcular').addEventListener('click', () => {
    let kg = Number(document.querySelector("#kg").value)
    let altura = Number(document.querySelector("#altura").value)

    if(kg == '' || altura == ''){
        alert("Preencha os campos corretamente")
    }else{
        let res = (kg/altura**2).toFixed(2)
        let classificacao = ''
        if (res < 18.5) {
            classificacao = 'baixo peso'
        } else if (res >= 18.5 && res < 25) {
            classificacao = 'normal'
        } else if (res >= 25 && res < 30) {
            classificacao = 'sobre-peso'
        } else {
            classificacao = 'obesidade'
        }

        resultado.innerHTML = `
        <hr>
        <div class="resultado_content">
            <div class="imc">
                <span  class="normal">${res}</span>
                <h3>seu IMC</h3>
            </div>
            <p>Seu peso esta: ${classificacao}</p>
        </div>
        <hr>
        <a href="https://superafarma.com.br/calcule-o-seu-imc-calculadora-peso-ideal/" target="_blank">Mais informacoes sobre o IMC</a>
            `
        pesosanteriores(res,classificacao)
}   
})


function pesosanteriores(res,classificacao){
    
    imc.push({
        peso:res,
        estado:classificacao
    })
    imc.map((conteudo,index) => {
        console.log(`Seus imc antigos são: ${conteudo.peso} e seu estado era de ${conteudo.estado} na vez ${index + 1}`)
    })
}

let dropdown_btn = document.querySelector('.dropdown_btn').addEventListener("click", () => {

    let dropdown = document.querySelector("#dropdown")
    dropdown.addEventListener('click', (evento) => {

        evento.stopPropagation()
    })
    if(dropdown.style.display == 'none'){
        dropdown.style.display = 'flex'
    }else{
        dropdown.style.display = 'none'
    }
})

