import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from './snake.js'

let lastRenderTime = 0

function main(currentTime) {
    window.RequestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - LastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()

}

function draw() {
    drawSnake()

}