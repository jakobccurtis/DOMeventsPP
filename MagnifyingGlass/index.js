let text = document.body.querySelector('p');
let size = 16

let biggerButton = document.body.querySelector('#button1');

biggerButton.addEventListener('click', () => {
    if (size > 1 && size < 100) {
        text.style.fontSize = `${size}px`;
        size += 1;
        console.log(size);
    }
})

let smallerButton = document.body.querySelector('#button2');

smallerButton.addEventListener('click', () => {
    if (size > 1 && size < 100) {
        text.style.fontSize = `${size}px`;
        size -= 1;
        console.log(size);
    }
})