const lista_container = document.querySelector(".list")
let array_lista = []
const btn_adcionar = document.querySelector(".btn_ad").addEventListener("click", (evt) => {

    const inputarefa = document.querySelector('.adtask').value
    if(inputarefa == '' || array_lista.indexOf(inputarefa) != -1){
        alert('Você não pode adcionar uma tarefa vazia ou que já tenha sido adcionada')
    }else{
    let novoelementoUl = document.createElement('ul')
    novoelementoUl.setAttribute("class",'task desativado')

    let novoelementoli = document.createElement('li')
    novoelementoli.setAttribute('class','tarefa')
    novoelementoUl.appendChild(novoelementoli)

    let novoelementoImgLixeira = document.createElement('img')
    novoelementoImgLixeira.setAttribute('src', '/Projetos/todolist com js/img/trash.png')
    novoelementoli.appendChild(novoelementoImgLixeira)
    novoelementoImgLixeira.addEventListener('click', (evt) => {

        deletar(evt.target)
    })

    let novoelementoP = document.createElement('p')
    novoelementoP.innerHTML = inputarefa
    novoelementoli.appendChild(novoelementoP)

    let novoelementoImgChecked = document.createElement('img')
    novoelementoImgChecked.setAttribute('src','/Projetos/todolist com js/img/checked.png')
    novoelementoli.appendChild(novoelementoImgChecked)
    novoelementoImgChecked.addEventListener('click', (evt) => {

        checked(evt.target)
    })
    array_lista.push(inputarefa)
    console.log(novoelementoUl)
    console.log(array_lista)

    lista_container.appendChild(novoelementoUl)
    }
})

function deletar(evt){

    array_lista.splice(evt.nextSibling.textContent,1)
    evt.parentNode.parentNode.remove()
}

function checked(evt){
    const evtparent = evt.parentNode.parentNode.classList.toggle('selected')
}