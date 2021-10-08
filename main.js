
const buttonAng = document.getElementById('angustia')
import { drawParticles } from './modules/particles.js';
import { canvas, ctx, r1, r2, r3, drawParches } from './modules/rings.js'



export function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    r1.update() 
    r2.update()
    r3.update()

    drawParches()
    drawParticles()
    
}

r1.update()  
r2.update()
r3.update()
drawParches()

//buttons
buttonAng.addEventListener('click', angustia);

function angustia(){
    
    init();
    animate();   
}
