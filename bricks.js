let amountOfBricks = 5
let array = []
let x = 20
let y = 100
const win = document.createElement('audio')
win.src = 'win.mp3'
class Brick {
    constructor() {
        this.width = 55
        this.height = 20
        this.space = 20
        this.x = x
        this.y = y
    }

    drawBricks() {
        ctx.fillStyle = "#2e3548"
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeStyle = '#FFF'
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
    clearBricksArray() {}
}

function handleBricks() {
    for (let i = 0; i < amountOfBricks; i++) {
        let brick = new Brick()
        x += brick.width + brick.space
        if (x > (brick.width + brick.space) * 4 + 20) {
            x = 20
            y += brick.space + brick.height
        }
        array.push(brick)
    }
}

function drawBricksFunction() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null) {
            array[i].drawBricks()
        }
    }
}

function checkBricks() {
    if (array.every(function(element) {
            return (element.x === 900)
        })) {
        if (level === 3) {
            gameOverWin()
        } else {
            win.play()
            resetNextLevel()
            resetBall()
        }
    }
}

function resetNextLevel() {
    y = 100
    array.splice(0)
    amountOfBricks += 5
    speed += 5
    level++
    handleBricks()
}
handleBricks()
    //if (checkBricks) AmountOfBricks+=5
    // 1. заменить элемент в самом массиве на null
    // 2.