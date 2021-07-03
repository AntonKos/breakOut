const sound2 = document.createElement('audio')
sound2.src = 'sound2.wav'
sound1.volume = 0.1
sound2.volume = 0.1
sound3.volume = 0.1
lifeLose.volume = 0.1

const soundElement = document.getElementById("sound")

soundElement.addEventListener('click', audioManager)

function audioManager() {
    let imgSrc = soundElement.getAttribute('src')
    let SOUND_IMG = imgSrc == 'SOUND_ON.png' ? 'SOUND_OFF.png' : 'SOUND_ON.png'
    soundElement.setAttribute('src', SOUND_IMG)
    sound2.muted = sound2.muted ? false : true
    win.muted = win.muted ? false : true
    sound1.muted = sound1.muted ? false : true
    sound3.muted = sound3.muted ? false : true
    lifeLose.muted = lifeLose.muted ? false : true
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    checkCollisionWithBricks()
    //checkLevel()
    showGameStat()
    paddle.move()
    paddle.draw()
    ball.draw()
    ball.move()
    ball.checkCollision()
    ball.checkCollisionWithPaddle()
    ball.checkCollisionWithBottom()
    drawBricksFunction()

    checkBricks()
    let requestId = requestAnimationFrame(animate)
}
animate()

function showGameStat() {
    showGameStats(score, 35, 25, scoreImage, 5, 5)
    showGameStats(level, canvas.width / 2, 25, levelImage, canvas.width / 2 - 30, 5)
    showGameStats(life, canvas.width - 25, 25, lifesImage, canvas.width - 55, 5)
}

function checkCollisionWithBricks() {
    for (let i = 0; i < array.length; i++) {
        if (ball.x + ball.radius > array[i].x &&
            ball.x - ball.radius < array[i].x + array[i].width &&
            ball.y + ball.radius > array[i].y &&
            ball.y - ball.radius < array[i].y + array[i].height) {
            score += 10
            sound2.play()
            ball.ySpeed = -ball.ySpeed
            array[i].x = 900
        }
    }
}

window.addEventListener('resize', function () {
    canvasPosition = canvas.getBoundingClientRect()
})