import { canvas, ctx, drawRing } from './modules/rings.js'

export let particlesArray;

export class Particle {
    constructor(x, y, directionX, directionY, size, color){
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
        this.color = color
    }
    //method to draw individual particle
    draw(){        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = '#9249ec'
        ctx.fill();
    }
    //check particle position, move the particle, draw the particle
    update(){
        //check if particle is still in canvas area
        if(this.x > canvas.width || this.x < 0){
            this.directionX = -this.directionX
        }
        if(this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY
        }
        //move particle
        this.x += this.directionX
        this.y += this.directionY
        // draw particle
        this.draw();
    }
}
//create particle array
export function init(){
    particlesArray = []
    let numberOfParticles = (canvas.height * canvas.width) / 5000
    for(let i = 0 ; i < numberOfParticles * 0.9; i++){
        let size = (Math.random()*5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#8c5523';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}
//check if particles are close enough to draw line between them
export function conect(){
    for(let a = 0; a < particlesArray.length; a++){
        for(let b = 0; b < particlesArray.length; b++){
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) 
                        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if(distance < (canvas.width/7) * (canvas.height/7)){
                ctx.strokeStyle = '#9249ec' ;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }            
        }
    }
}