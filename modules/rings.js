export const canvas = document.getElementById('canvasid')
export const ctx = canvas.getContext('2d')
canvas.width = 700 
canvas.height = 700

class Rings {
    constructor(x, y, size, color,angle){
        this.x = x
        this.y = y
        this.size = size  
        this.color = color
        this.angle = angle
    }    
    draw(){
        ctx.save()
        ctx.beginPath()
        ctx.translate(this.x, this.y)
        ctx.rotate(-this.angle * Math.PI/360)
        ctx.setLineDash([7, 1])
        ctx.strokeStyle = this.color
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.lineWidth = 20
        ctx.stroke()
        ctx.restore()
        
    }
    update(){
        this.angle += 0.1
        this.draw()
    }
    
}
export let r1 = new Rings(250, 250, 160, '#fcd208', 0)
export let r2 = new Rings(450, 250, 160, '#1c344f', 0)
export let r3 = new Rings (350, 425, 160, '#21b5c3', 0 )

export function drawParches(){    
    //parches
    ctx.beginPath()        
    ctx.setLineDash([5, 1])
    ctx.arc(250, 250, 160, (Math.PI/180)*100, (Math.PI/180)*120, false);
    ctx.strokeStyle = '#fcd208'
    ctx.lineWidth = 20
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(250, 250, 160, (Math.PI/180)*1, (Math.PI/180)*20, false)
    ctx.strokeStyle = '#fcd208'
    ctx.lineWidth = 20    
    ctx.stroke()
    ctx.restore()
}

