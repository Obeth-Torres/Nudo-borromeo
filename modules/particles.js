import { canvas, ctx } from './rings.js'

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
        ctx.fillStyle = this.color
        ctx.fill();
    }
    //check particle position, move the particle, draw the particle
    update(){
        if(this.x > 550 ){
            this.color = '#1c344f'
        } 
        if (this.x > 600 || this.y <105 ){
            this.color = '#ffbd1f'
            this.x = 350
            this.y = 350
        }
        
        //move particle
        this.x += this.directionX 
        this.y -= this.directionY *2
        // draw particle
        this.draw();
    }
}
//create particle array
export function init(){
    particlesArray = []
    let numberOfParticles = 50
    for(let i = 0 ; i < numberOfParticles ; i++){
        let size = (Math.random()*5) + 1;
        let x = 350
        let y = 350
        let directionX = Math.random()* 1+1;
        let directionY = Math.random() * 1;
        let color = '#ffbd1f';

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

ctx.beginPath()
