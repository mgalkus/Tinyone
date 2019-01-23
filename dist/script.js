const menuButton = document.querySelector('.menu-button')
const nav = document.querySelector('nav')
const body = document.querySelector('body')
const list = document.querySelectorAll('li')


menuButton.addEventListener('click', () => {
    console.log("menuButton clicked");
    nav.classList.toggle('active-nav');
    body.classList.toggle('no-scroll');
})

list.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.toggle('active-nav');
    })
})