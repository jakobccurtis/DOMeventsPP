let cookie = document.body.querySelector('img');

cookie.style.height = "200px";

let cookieCounter = document.body.querySelector('#cookieCounter');
counter = 0;

cookie.addEventListener('click', () => {
    counter += 1;
    console.log(`You've eaten ${cookieCounter} cookie(s)`);
    cookieCounter.innerHTML = counter;
})
