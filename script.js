document.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    if (window.pageYOffset > 0) {
        header.classList.add('header')
    }
    
    else header.classList.remove('header')
})