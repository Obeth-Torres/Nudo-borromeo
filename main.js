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