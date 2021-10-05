import { ctx,  } from './rings.js'

let particlesArray = []

class Particle {
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
    updateParticle(){
        //let distance from the center
        let distance = Math.sqrt(
            ((this.x - 250) * (this.x - 250)) 
            + ((this.y - 250) * (this.y - 250))
        )
        if (distance > 150){
            this.color = 'rgba(255, 191, 0, 1)'
        }

        let distance2 = Math.sqrt(
            ((this.x - 450) * (this.x - 450))
            + ((this.y - 250) * (this.y - 250))
        )
        if(distance2 > 135 && distance >=150){
            this.color = 'rgba(255, 191, 0, 0)'
            this.x = 250
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
function init(){
    particlesArray = []
    let numberOfParticles = 130
    for(let i = 0 ; i < numberOfParticles ; i++){
        let size = (Math.random()*5) + 1;
        let x = 300
        let y = (Math.random() * (370 - 200) + 200)
        let directionX = Math.random()* 1+1;
        let directionY = Math.random() * 1;
        let color = 'rgba(255, 191, 0, 0.0)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }    
}
init()

export function drawParticles(){
    for(let i = 0; i < 150; i++){
        particlesArray[i].updateParticle()
    }
}

