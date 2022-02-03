import { gsap } from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});

gsap.set("#nav-container", {alpha:0, y: -1000, x: 1000})
gsap.set(".nav-btns", {alpha:0, y:"+=50"})
// gsap.set("#nav-btns", {alpha:0, y: -1000})

menuAnimation.to("#nav-container", {duration: 0.5, y:0, x:0, alpha: 1})
.to(".nav-btns", {duration: 0.5, alpha:1, y:0, stagger: 0.5})
// .addPause()
// .addLabel("hoverOnMenu")
// .addPause()
// .addLabel("hoverOffMenu")

// const dropDown = document.querySelector("#nav-container")

// export function menuActions(){
//     dropDown.addEventListener("mouseenter",() =>{
//         console.log("enter here");
  
//         // menuAnimation.play("hoverOnMenu");
//     });
    
//     dropDown.addEventListener("mouseleave",() =>{
//         console.log("leave here");

//         // menuHover.play("hoverOffMenu");
//     });
//   }

// .to("#nav-btns", {duration: 1, alpha: 1, y:0});

// const menuBtn = document.querySelector("#nav-btns");

// let menuHover = gsap.timeline({paused:true});
// menuHover.to("#nav-container", {duration: 0.5, y:0, alpha: 1})
// .addPause()
// .addLabel("hoverOnMenu")
// .to(".nav-btns", {duration:0.25, rotation:45})
// .addPause()
// .addLabel("hoverOnMenu")
// .to(".nav-btns", {duration:0.25, rotation:0})