
import { ctx } from "./rings.js"



class texto {
    constructor(x, y, text, color, font ){
        this.x = x
        this.y = y
        this.text = text
        this.color  = color
        this.font = font
    }
    draw(){
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.font = this.font
        ctx.fillText(this.text, this.x, this.y)
        ctx.restore()
    }
}
let real = new texto(100, 100, 'R', '#fcd208', '45px arial ' )
let simbolico = new texto(560, 100, 'I', '#1c344f', '45px arial ')
let imaginario = new texto(350, 650, 'S', '#21b5c3', '45px arial ')

let a = new texto(340, 320, 'a', '#ffff', '25px arial')
let jA = new texto(330, 230, 'J Ⱥ', '#ffff' , '25px arial ')
let jPhi = new texto(240, 375, 'J Φ', '#ffff', '25px arial')
let sentido = new texto(390, 375, 'sentido', '#ffff', '25px arial')


export function drawText(){

    real.draw()
    simbolico.draw()
    imaginario.draw()
    a.draw()
    jA.draw()
    jPhi.draw()
    sentido.draw()
}
