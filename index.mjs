const openNavBtn = document.getElementById('open-nav')
const closeNavBtn = document.getElementById('close-nav')
const navMobile = document.querySelector('.navigation-mobile-div')


openNavBtn.addEventListener('click' ,() => {
    
    navMobile.style.display = 'block'

    console.log(navMobile.style.display)
})

closeNavBtn.addEventListener('click' ,() => {
    
    navMobile.style.display = 'none'

})