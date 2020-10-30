const yourShip = document.querySelector('.player-shoot');
const playArea = document.querySelector('#mian-play-area');

function flyShip(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    }else if(event.key === 'ArrowDown') {
        event.preventDefault()
        moveDown();
    }else if(event.key === " ") {
        event.preventDefault();
        fireLazer();
    }
}

function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "0px") {
        return
    } else{
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`
    }

}

function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "540px"){
        return;
    }else{
        let position = parseInt(topPosition);
        position += 50
        yourShip.style.top = `${position}px`        
    }
}

function fireLazer() {
    let lazer = createLazerElement();
    playArea.appendChild(lazer);
    moveLazer(lazer);
}

function createLazerElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'))
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'))
    let newLazer = document.createElement('img');
    newLazer.src = '.img/Tiro.png';
    newLazer.classList.add('lazer');
    newLazer.style.left = `${xPosition}px`;
    newLazer.style.top = `${yPosition - 10}px`;
    return newLazer
}

function moveLazer(lazer) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(lazer.style.left);

        if(xPosition === 340) {
            lazer.remove();
        }else {
            lazer.style.left = `${xPosition + 8}px`;
        }
    }, 10)
}



window.addEventListener('keydown', flyShip)