// Selecionar itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectlink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectlink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var content = document.getElementById('fotos')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    content.classList.toggle('expandirconteudo')
})

