let moveRight = false
let moveLeft = false
let paddleSpeed = 5
    //делаем paddle
let paddleWidth = 100
let paddleHeight = 20

class Paddle {
    constructor() {
        this.x = canvas.width / 2 - paddleWidth / 2
        this.y = canvas.height - paddleHeight * 2
        this.width = paddleWidth
        this.height = paddleHeight
        this.color = '#2e3548'
    }
    move() {
        if (moveRight && this.x < canvas.width - this.width) {
            this.x += paddleSpeed
        }
        if (moveLeft && this.x > 0) {
            this.x -= paddleSpeed
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'gold'
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}

let paddle = new Paddle()

window.addEventListener('keydown', function(e) {
    if (e.code === 'ArrowLeft') {
        moveLeft = true
    }
    if (e.code === 'ArrowRight') {
        moveRight = true
    }
})

window.addEventListener('keyup', function(e) {
    if (e.code === 'ArrowLeft') {
        moveLeft = false
    } else if (e.code === 'ArrowRight') {
        moveRight = false
    }
})