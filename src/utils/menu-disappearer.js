// let previousScrollPosition = window.pageYOffset;
let showMenu = false;


window.onscroll = () => {
    showMenu = false;
    let currentScrollPosition = window.pageYOffset;
    let social = document.querySelectorAll('.social');
    const menuIcon = document.querySelector("#menuIcon");
    const menuElement = document.querySelector("#menu");
    menuElement.classList.add('menu-disappear');

    if (currentScrollPosition > "80") {
        social.forEach(icon => icon.style.opacity = 0);
        menuElement.classList.add('menu-disappear');
        menuIcon.classList.add('menu-icon-show');
        menuIcon.classList.remove('rotate-icon');
        menuElement.classList.add('remove-label');
    }else {
        social.forEach(icon => icon.style.opacity = 1);
        menuElement.classList.remove('menu-disappear');
        menuElement.style.background = "none";
        menuIcon.classList.remove('menu-icon-show');
        menuElement.style.transform = "translateY(0)";
        menuElement.classList.remove('remove-label');
    }

    // previousScrollPosition = currentScrollPosition;
};

export const menuToggle = () => {
    console.log(showMenu);
    showMenu = !showMenu;
    return showMenu;
};
