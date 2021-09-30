export const canvas = document.getElementById('canvasid')
export const ctx = canvas.getContext('2d')
canvas.width = 700 
canvas.height = 700

let rings = []

class Ring {
    constructor(x, y, size, color){
        this.x = x
        this.y = y
        this.size = size
        this.color = color
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2,)
        ctx.strokeStyle = this.color
        ctx.lineWidth = 15
        ctx.stroke();
    }

}



const ring1 = new Ring(250, 250, 150, '#fcd208')
const ring2 = new Ring(450, 250, 150, '#1c344f')
const ring3 = new Ring(350, 425, 150, '#21b5c3')
rings.push(ring1)
rings.push(ring2)
rings.push(ring3)

export function drawRing (){
    rings[0].draw()
    rings[1].draw()
    rings[2].draw()
    ctx.beginPath()
    ctx.arc(250, 250, 150, (Math.PI/180)*100, (Math.PI/180)*115, false);
    ctx.strokeStyle = '#fcd208'
    ctx.lineWidth = 15
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(250, 250, 150, (Math.PI/180)*5, (Math.PI/180)*16, false)
    ctx.strokeStyle = '#fcd208'
    ctx.lineWidth = 15
    ctx.stroke()
}


