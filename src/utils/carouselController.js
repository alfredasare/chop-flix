// declare variables
let container = '';
let images = '';
let dots = [];
let size = 0;

//counter
let counter = 1;

//create carousel slider
const carouselSlider = () => {
    container.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if (dots.length !== 0 && dots[counter - 1] !== undefined){
        dots.forEach(dot => dot.style.background = "none");
        dots[counter-1].style.backgroundColor = "white";
    }
};

export const loadVariables = () => {
    container = document.querySelector("#carouselContainer");
    images = document.querySelectorAll("#carouselContainer *");
    dots = document.querySelectorAll("#dots *");
    size = images[0].clientWidth;
    carouselSlider();
    //add transition event listener
    container.addEventListener("transitionend", () => {
        if (images[counter].id === "lastClone"){
            container.style.transition = "none";
            counter = images.length - 2;
            carouselSlider();
        }else if (images[counter].id === "firstClone"){
            container.style.transition = "none";
            counter = images.length - counter;
            carouselSlider();
        }
    });
    //add click listener for dots
    dots.forEach((dot, index) => dot.addEventListener("click", () => {
        const dotsArray = Array.from(dots);
        counter = (dotsArray.indexOf(dot) + 1);
        addTransition();
        carouselSlider();
    }))
};

const addTransition = () => {
    container.style.transition = "all 1s ease-in-out";
};

export const nextButton = () => {
    if(counter >= images.length - 1) return;
    addTransition();
    counter++;
    carouselSlider();
};
export const previousButton = () => {
    if (counter <= 0)return;
    addTransition();
    counter--;
    carouselSlider();
};





