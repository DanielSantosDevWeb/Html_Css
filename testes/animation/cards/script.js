
function diminuir(c) {
    c.style.width = '100px'
    
}

function almentar(c, c2) {
    
    c2[0].style.width = '50px'
    c2[1].style.width = '50px';
    c2[2].style.width = '50px';
    c2[3].style.width = '50px';
    c2[4].style.width = '50px';
    
    diminuir(c)
} 

const card = document.querySelectorAll('.card')

const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')
const c5 = document.querySelector('.c5')

c1.addEventListener('click', () => {
    almentar(c1, card)
})

c2.addEventListener('click', ()=> {
    almentar(c2, card)
} )

c3.addEventListener('click', () => {
    almentar(c3, card)
})

c4.addEventListener('click', () => {
    almentar(c4, card)
})

c5.addEventListener('click', () => {
    almentar(c5, card)
})