
const keyboard = document.querySelector('.keyboard');
const numbers = document.querySelector('.numbers');
const center = document.querySelector('.center');

const eventEffect = () =>{
    const elem = document.createElement('div');
    elem.className = 'circleEffect';
    center.appendChild(elem);
    setTimeout(() =>{ center.removeChild(elem) }, 500)
    setTimeout(() =>{ center.appendChild(elem) }, 1000)
    setTimeout(() =>{ center.removeChild(elem) }, 1500)
    setTimeout(() =>{ center.appendChild(elem) }, 2000)
    setTimeout(() =>{ center.removeChild(elem) }, 2500)
}
keyboard.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        console.log(e.target);
       eventEffect();
    }
})
numbers.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON'){
        console.log(e.target);
        eventEffect();
    }
})