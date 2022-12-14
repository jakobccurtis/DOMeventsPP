// let inputAttrs = {
    //     type: '', 
    //     id: '',
    //     value: '',
    
    // }    
    // function setInputAttr(att)
let colors = ["red", "green", "blue", "yellow", "purple"]

let changeColorButton = document.body.querySelector('button')

changeColorButton.addEventListener('click', () => {
    chosenColor = document.body.querySelector('input').getAttribute('value');

    if (chosenColor in colors) {
        document.body.style.backgroundColor = "chosenColor"
    }
    else {
        let error = document.createElement('p');
        error.innerHTML = "You chose an invalid color";
        document.body.appendChild;
    }
})