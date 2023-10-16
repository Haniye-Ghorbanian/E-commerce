const beforeHeader = window.getComputedStyle(HEADER, '::before')
function fadeShowHeader() {
    const scrollY = window.scrollY;
    const headerOpacity = 1 - scrollY / 100;
    const homeOpacity = 0 + scrollY / 100;

     

    if (scrollY >= 100) {    
        HEADER.classList.remove('z-1')
        HEADER.classList.add('z-0')
    } else {
        HEADER.classList.remove('z-0')
        HEADER.classList.add('z-1')
    }

    HEADER.style.opacity = headerOpacity.toFixed(2);
    MAIN_HOME.style.opacity = homeOpacity.toFixed(2);
}





document.addEventListener('scroll', fadeShowHeader);