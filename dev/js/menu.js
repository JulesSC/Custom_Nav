import { gsap } from "gsap";

// we need a refernce to all of the link <a>
let links = document.querySelectorAll("#nav-container a");
console.log(links.length + " is the number of links in my nav-container");


export function menuListners (){

    console.log("working");

    links.forEach((link, i) => {
        link.addEventListener("mouseenter", ()=>{
            console.log("mouse enter");
            gsap.to(links[i],{scale:2,duration:0.25, fontWeight:700});
        })

        link.addEventListener("mouseleave", ()=>{
            console.log("mouse leave");
            gsap.to(links[i],{scale:1,duration:0.25, fontWeight:300});
        })
    });

}