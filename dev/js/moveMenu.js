import { gsap } from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});

gsap.set("#nav-container", {alpha:0, y: -1000, x: 1000})
gsap.set(".nav-btns", {alpha:0, y:"+=50"})

menuAnimation.to("#nav-container", {duration: 0.5, y:0, x:0, alpha: 1})
.to(".nav-btns", {duration: 0.15, alpha:1, y:0, stagger: 0.05})