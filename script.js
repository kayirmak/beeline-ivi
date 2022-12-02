document.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    window.pageYOffset > 0 ? header.classList.add('header') : header.classList.remove('header')
})

document.querySelector('.mobile-menu__items').addEventListener('click', (e) => {
    const target = e.target.closest('.mobile-menu__item')
    const list = target.querySelector('.mobile-sub-menu__items')
    list ? list.classList.toggle('mobile-sub-menu__show') : ''

    e.target.classList[0] === 'mobile-menu__item-img' ? e.target.classList.toggle('rotate-icon') : ''
})

document.querySelector('.burger-menu').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.remove('menu-hidden')
    mobileMenu.classList.add('menu-show')
})

document.querySelector('.close-menu').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.remove('menu-show')
    mobileMenu.classList.add('menu-hidden')
})