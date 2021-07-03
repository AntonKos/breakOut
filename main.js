const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 400
canvas.height = 500

let life = 3
let level = 1
let score = 0

const lifesImage = new Image()
lifesImage.src = "lifes.png"
const levelImage = new Image()
levelImage.src = 'level.png'
const scoreImage = new Image()
scoreImage.src = "score.png"

function gameOverWin() {
    showYouWin()
    cancelAnimationFrame(requestId)
}

function gameOverLose() {
    showYouLose()
    cancelAnimationFrame(requestId)
}

function showGameStats(text, textX, textY, img, imgX, imgY) {
    ctx.fillStyle = '#FFF'
    ctx.font = '25px Germania One'
    ctx.fillText(text, textX, textY)
    ctx.drawImage(img, imgX, imgY, 25, 25)
}

const gameEnd = document.getElementById('gameover')
const youwon = document.getElementById('youwon')
const youlose = document.getElementById('youlose')
const restart = document.getElementById('restart')

restart.addEventListener('click', function() {
    location.reload()
})

function showYouWin() {
    gameEnd.style.display = 'block'
    youwon.style.display = 'block'
}

function showYouLose() {
    gameEnd.style.display = 'block'
    youlose.style.display = 'block'
}