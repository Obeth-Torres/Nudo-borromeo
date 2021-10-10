import { animate } from '../main.js'
import { ctx, r1 } from './rings.js'
const btnSintoma = document.getElementById('sintoma')
const buttonAng = document.getElementById('angustia')
const btnInhibicion = document.getElementById('inhibicion')

let particlesArray = []
let r1X = 250
let r1Y = 250
let r2X = 450
let r2Y = 250
let particleColor = 'rgba(255, 191, 0, 1)'
let particleColorAlfa = 'rgba(14, 34, 86, 0.0)'
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
            ((this.x - r1X) * (this.x - r1X)) 
            + ((this.y - r1Y) * (this.y - r1Y))
        )
        if (distance > 150){
            this.color = particleColor
        }
        let distance2 = Math.sqrt(
            ((this.x - r2X) * (this.x - r2X))
            + ((this.y - r2Y) * (this.y - r2Y))
        )
        if(distance2 > 135 && distance >=150){
            this.color = particleColorAlfa
            this.x = 350
            this.y = 350
        }
        //move particle
        this.x += this.directionX 
        this.y += this.directionY *2
        // draw particle
        this.draw();
    }
}
//create particle array
function init(){
    particlesArray = []
    let numberOfParticles = 150
    for(let i = 0 ; i < numberOfParticles ; i++){
        let size = (Math.random()*5) + 1;
        let x = 300
        let y = (Math.random() * (370 - 200) + 200)
        let directionX = Math.random()* 1+1;
        let directionY = - Math.random() * 1;
        let color = particleColorAlfa;
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }    
}
init()



export function drawParticles(){
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].updateParticle()
    }
}


btnSintoma.addEventListener('click', sintoma)
function sintoma(){
    r1X = 450
    r1Y = 250
    r2X = 350
    r2Y = 425
    particleColor = 'rgba(28, 52, 79, 1)'
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].x = 330
        particlesArray[i].y = 250
        particlesArray[i].directionX = Math.random()* 1
        particlesArray[i].directionY = Math.random() * 1
        particlesArray[i].color = 'rgba(14, 34, 86, 0.0)';
    }
    animate()
}

//buttons
buttonAng.addEventListener('click', angustia);
//drawRing1()
function angustia(){
    r1X = 250
    r1Y = 250
    r2X = 450
    r2Y = 225
    particleColor = 'rgba(252, 210, 8, 1)'
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].x = 350
        particlesArray[i].y = 350
        particlesArray[i].directionX = Math.random()* 1
        particlesArray[i].directionY = - Math.random() * 1
        particlesArray[i].color = 'rgba(255, 191, 0, 0.0)';
    }    
    animate();   
}

btnInhibicion.addEventListener('click', inhibicion);
//drawRing1()
function inhibicion(){
    r1X = 350
    r1Y = 425
    r2X = 250
    r2Y = 250
    particleColor = 'rgba(33, 181, 195, 1)'
    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].x = 350
        particlesArray[i].y = 350
        particlesArray[i].directionX = - Math.random()* 1
        particlesArray[i].directionY = - Math.random() * 1
        particlesArray[i].color = 'rgba(255, 191, 0, 0.0)';
    }    
    animate();   
}