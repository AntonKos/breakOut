let speed = 3

function circle(x, y, radius) {
    ctx.lineWidth = 3
    ctx.strokeStyle = '#2e3548'
    ctx.fillStyle = 'gold'
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke()
}

const sound1 = document.createElement('audio')
sound1.src = 'bounce02.wav'
const sound3 = document.createElement('audio')
sound3.src = 'bouncing-cork.wav'
const lifeLose = document.createElement('audio')
lifeLose.src = 'life_lost.mp3'

function resetBall() {
    ball.x = canvas.width / 2
    ball.y = canvas.height - paddle.height - ball.radius * 4
    paddle.x = canvas.width / 2 - paddleWidth / 2
    paddle.y = canvas.height - paddleHeight * 2
}

class Ball {
    constructor() {
        this.radius = 8
        this.x = canvas.width / 2
        this.y = canvas.height - paddle.height - this.radius * 4
        this.xSpeed = speed
        this.ySpeed = speed + 2
    }
    draw() {
        circle(this.x, this.y, this.radius)
    }
    move() {
        this.x += this.xSpeed
        this.y -= this.ySpeed
    }

    checkCollision() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.xSpeed = -this.xSpeed
            sound3.play()
        }
        if (this.y - this.radius < 0) {
            this.ySpeed = -this.ySpeed
            sound3.play()
        }
    }

    checkCollisionWithPaddle() {
        if (this.x > paddle.x &&
            this.x < paddle.x + paddle.width &&
            this.y > paddle.y - 1 &&
            this.y < paddle.y + paddle.height) {
            this.ySpeed = -this.ySpeed
            let centerOfPaddleX = paddle.x + paddle.width / 2
            let ballDistFromPaddleCenterX = this.x - centerOfPaddleX
            this.xSpeed = ballDistFromPaddleCenterX * 0.15
            sound1.play()
        }
    }

    checkCollisionWithBottom() {
        if (this.y > canvas.height) {
            lifeLose.play()
            life--
            if (life < 1) {
                gameOverLose()
            }
            resetBall()
        }
    }
}


let ball = new Ball()