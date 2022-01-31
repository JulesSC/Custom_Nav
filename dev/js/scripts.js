import { burgerTL } from "./burgerAnimation";
import { displayWindowSize } from "./mobileResizing";
import { menuAnimation } from "./mobileMenu";

var burgerButton = document.querySelector("#burger");

let canISeeMenu = false;

function openCloseMenu(){
    if (canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");

for(let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click", openCloseMenu);
}

console.log(navButtons);

// window.addEventListener('resize', displayWindowSize);

window.addEventListener('load', displayWindowSize);