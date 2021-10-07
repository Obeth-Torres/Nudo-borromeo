
import { drawParticles } from './modules/particles.js';
import { canvas, ctx, r1, r2, r3, drawParches } from './modules/rings.js'



export function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //drawRing1()
    r1.update() 
    r2.update()
    r3.update()
    //parches
    drawParches()
    drawParticles()
}

r1.update()  
r2.update()
r3.update()
drawParches()

import { ctx, drawRing } from './modules/rings.js'
import { conect, init, particlesArray } from './particles.js';
const buttonAng = document.getElementById('angustia')

//animation loop 
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
    conect(); 
    drawRing()  
}
//buttons
buttonAng.addEventListener('click', angustia);
drawRing()

function angustia(){
    
    init();
    animate();   
}
