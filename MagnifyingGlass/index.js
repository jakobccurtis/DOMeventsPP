let bigger = document.body.querySelector("#bigger");
let smaller = document.body.querySelector("#smaller");



bigger.addEventListener('click', () => {
    if (bigger.style.fontSize >= 100) {
        console.log("Error, max size 100px");
    }
    else {
        bigger.style.fontSize += 1;
    }
})

smaller.addEventListener('click', () => {
    if (smaller.style.fontSize <= 1) {
        console.log("Error, min size 1px");
    }
    else {
        smaller.style.fontSize -= 1;
    }
})