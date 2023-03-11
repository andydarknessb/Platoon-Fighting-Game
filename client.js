const canvas =document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor(position, velocity) {
        this.position = position
        this.velocity = velocity 
        this.height = 150
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
    }
}

const player = new Sprite({
    x: 0,
    y: 0
}, {
    x: 0,
    y: 5
});

const enemy = new Sprite({
    x: 400,
    y: 100
}, {
    x: 0,
    y: 3
});



console.log(player)

function animate() {
    window.requestAnimationFrame(animate)
    console.log('go')
    c.fillStyle = 'black'
    c.fillRect(0, 0 , canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()