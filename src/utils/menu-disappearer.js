// let previousScrollPosition = window.pageYOffset;
let showMenu = false;


window.onscroll = () => {
    showMenu = false;
    let currentScrollPosition = window.pageYOffset;
    let social = document.querySelectorAll('.social');
    const menuIcon = document.querySelector("#menuIcon");
    const menuElement = document.querySelector("#menu");
    const vertical = document.querySelector('#vertical');
    menuElement.classList.add('menu-disappear');

    if (currentScrollPosition > "80") {
        social.forEach(icon => icon.style.opacity = 0);
        menuElement.classList.add('menu-disappear');
        menuIcon.classList.add('menu-icon-show');
        menuIcon.classList.remove('rotate-icon');
        menuElement.classList.add('remove-label');
        menuElement.classList.add('add-gradient');
        menuElement.style.justifyContent = "space-around";
        vertical.style.width = "100%";
        vertical.style.height = "2px";

    }else {
        social.forEach(icon => icon.style.opacity = 1);
        menuElement.classList.remove('menu-disappear');
        menuElement.classList.remove('add-gradient');
        menuIcon.classList.remove('menu-icon-show');
        menuElement.style.transform = "translateY(0)";
        menuElement.classList.remove('remove-label');
        vertical.style.height = "calc(100% - 433px)";
        vertical.style.width = "2px";
    }

    // previousScrollPosition = currentScrollPosition;
};

export const menuToggle = () => {
    console.log(showMenu);
    showMenu = !showMenu;
    return showMenu;
};
