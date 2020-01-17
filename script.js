const container = document.getElementById('container');

const clear = () => {
    let cells = document.getElementsByClassName('cell');
    while (cells.length > 0) {
        container.removeChild(container.firstElementChild);
    }
}

const grid = (n) => {
    clear(); 

    container.style.setProperty('--grid-rows', n);
    container.style.setProperty('--grid-cols', n);
    
    for (let i = 0; i < n*n; i++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        container.appendChild(cell);
    }
}

function random(number) {
    return Math.floor(Math.random()*number);
}

const hovering = () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseenter', color))
}

const color = (e) => {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
    let size = prompt('Enter the size of the sketch pad');
    grid(size);
    hovering(); 
});