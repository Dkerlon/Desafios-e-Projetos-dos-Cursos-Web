const menu = [...document.querySelectorAll('.menu')]
const section_content = document.querySelector('.section_content')
const arrow = [...document.querySelectorAll('.arrow')]
const input_email = document.querySelector('#email_form')
const btn_email = document.querySelector('#btn_email')
const novaSessao = [{
    img:'/Projetos/bla/bookmark-landing-page-master/bookmark-landing-page-master/images/illustration-features-tab-1.svg',
    titulo:'Bookmark in one  click',
    paragrafo:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
},{
    img:'/Projetos/bla/bookmark-landing-page-master/bookmark-landing-page-master/images/illustration-features-tab-2.svg',
    titulo:'Intelligent search',
    paragrafo:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
},{
    img:'/Projetos/bla/bookmark-landing-page-master/bookmark-landing-page-master/images/illustration-features-tab-3.svg',
    titulo:'Share your bookmarks',
    paragrafo:' Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
}]
let usuarios = []
let menuSelecionado;

function renderizarSessão(){

        section_content.innerHTML = `
        <div class="imgs">
        <img src="${novaSessao[menuSelecionado].img}" alt="illustration-features-tab-${menuSelecionado + 1}">
        </div>
        <div class="right_section">
            <h2>${novaSessao[menuSelecionado].titulo}</h2>
            <p>${novaSessao[menuSelecionado].paragrafo}</p>
            <button class="btn_info">Mais Informações</button>
        </div>` 
}

menu.forEach((el) => {
    el.addEventListener('click', (evt) => {
        menu.forEach((item) => {
            item.classList.remove('selecionado')
        })
        menuSelecionado = evt.target.value
        el.classList.add('selecionado')
        renderizarSessão()
    });
});


arrow.map((el) => {

    el.addEventListener('click', (evt) => {
        let questaoSelecionada = evt.target.parentNode.nextElementSibling
        questaoSelecionada.classList.toggle('questao-selecionada')
    })
})

btn_email.addEventListener('click', () => {
    event.preventDefault()

    if(input_email.value == ''){
        input_email.value = 'Preencha o seu Email !'
    }else{
     const c1 = new NovoEmail(input_email.value)
     usuarios.push(c1)
     console.log(usuarios)
    }
})

class NovoEmail {

    constructor(email,senha){

        this.email = email
        this.senha = senha
    }
    getEmail(){
        return this.email
    }
    getSenha(){
        return this.senha
    }
    setEmail(email){
        this.email = email
    }
    setSenha (senha){
        this.senha = senha
    }
}