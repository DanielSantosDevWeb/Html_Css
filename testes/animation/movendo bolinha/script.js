var ball = document.querySelector('.bolinha')
var cimabtn = document.getElementById('cima')
var direitabtn = document.getElementById('direita')
var esquerdabtn = document.getElementById('esquerda')
var baixobtn = document.getElementById('baixo')
var sumirbtn = document.getElementById('sumir')

var leftBall = -150
var topBall = 150

function esquerda() {
    leftBall -= 20
    
    ball.style.left = leftBall + 'px'
}

function direita() {
    leftBall += 20

    ball.style.left = leftBall + 'px'
}

function cima() {
    topBall -= 20

    ball.style.top = topBall + 'px'
}

function baixo() {
    topBall += 20

    ball.style.top = topBall + 'px'
}

cimabtn.addEventListener('click', cima)
baixobtn.addEventListener('click', baixo)
direitabtn.addEventListener('click', direita)
esquerdabtn.addEventListener('click', esquerda)
sumirbtn.addEventListener('click', sumir)