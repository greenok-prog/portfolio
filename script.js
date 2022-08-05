const init = () => {
    // изменяет скорость видео
    const video = document.querySelector('video')
    video.playbackRate = 0.5
    
    // фиксирует меню при прокрутке
    const nav = document.querySelector('.top-nav')
    
    window.onscroll = () => {
        this.scrollY > 620 ? nav.classList.add('fixed') : nav.classList.remove('fixed')
    }

    // скрывает меню после нажатия на ссылку
    const menuToggle = document.querySelector('#menu-toggle')
    const menu = document.querySelector('.menu')
    menu.addEventListener('click', () => {
        menuToggle.checked = false
    })


}
init()