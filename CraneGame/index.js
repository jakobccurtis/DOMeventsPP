let crane = document.body.querySelector('img');
let verticalPosition = 0;
let horizontalPosition = 0;

let upButton = document.body.querySelector('#upButton');
    upButton.addEventListener('click', () => {
        verticalPosition += 1;
        crane.style.bottom = `${verticalPosition}em`;
    })

let downButton = document.body.querySelector('#downButton');
    downButton.addEventListener('click', () => {
        verticalPosition -= 1;
        crane.style.bottom = `${verticalPosition}em`;
    })
let leftButton = document.body.querySelector('#leftButton');
    leftButton.addEventListener('click', () => {
        horizontalPosition += 1;
        crane.style.right = `${horizontalPosition}em`;
    })
let rightButton = document.body.querySelector('#rightButton');
    rightButton.addEventListener('click', () => {
        horizontalPosition -= 1;
        crane.style.right = `${horizontalPosition}em`;
    })