let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItems('next') // quando clico no botão next chama essa função
btnBack.onclick = () => moveItems('back') // quando clico no botão back chama essa função

function moveItems(type) { // esta função recebe um type back ou next

    let listItems = document.querySelectorAll('.list .list-item') // estou pegando todos os itens do list
    let thumbItems = document.querySelectorAll('.thumb .thumb-item') // estou pegando todos os itens da thumb
    
    if(type === 'next') {
      list.appendChild(listItems[0]) // estou pegando o item e colocando na primeira posição
      thumb.appendChild(thumbItems[0]) // estou pegando a thumb e colocando na primeira posição
      container.classList.add('next') // estou adicionando uma classe
    } else {
        list.prepend(listItems[listItems.length - 1]) // estou pegando o item e colocando na ultima posição
        thumb.prepend(thumbItems[thumbItems.length - 1]) // estou pegando a thumb e colocando na ultima posição
        container.classList.add('back') // estou adicionando uma classe
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000); // estou removendo as classes criadas
}