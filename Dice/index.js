let diceRoll = document.body.querySelector('#diceRoll');
let result = document.body.querySelector('.result');

diceRoll.addEventListener('click', () => {
    let randomNumMax = document.body.querySelector('.randomNumMax').value;

    result.innerHTML = eval(Math.floor(((randomNumMax-1)*Math.random()) + 1));
    })