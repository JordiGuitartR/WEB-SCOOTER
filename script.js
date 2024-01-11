let navbarVisible = true;

function toggleNav() {

    const burgerIcon = document.querySelector('.burger-icon');
    const navbarVertical = document.querySelector('.vertical-navbar');

    if (burgerIcon && navbarVertical) {
        if (window.innerWidth <= 700) {
            if (navbarVisible) {

                burgerIcon.classList.add('burger-icon-hidden');
                navbarVertical.style.display = 'flex';
            } else {

                burgerIcon.classList.remove('burger-icon-hidden');
                navbarVertical.style.display = 'none';
            }

            navbarVisible = !navbarVisible;
        }
    }
}

function resetNavbarState() {

    const burgerIcon = document.querySelector('.burger-icon');
    const navbarVertical = document.querySelector('.vertical-navbar');

    if (burgerIcon && navbarVertical) {
        if (window.innerWidth > 700) {

            burgerIcon.classList.add('burger-icon-hidden');
            navbarVertical.style.display = 'none';
            navbarVisible = true;
        }
    }
}

window.addEventListener('resize', resetNavbarState);
window.addEventListener('load', resetNavbarState);
