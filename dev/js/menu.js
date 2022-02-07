import { gsap } from "gsap";
// gsap.registerPlugin(SplitText);

// we need a refernce to all of the link <a>
let links = document.querySelectorAll("#nav-container a");
console.log(links.length + " is the number of links in my nav-container");

// var tl = gsap.timeline(),
//   mySplitText = new SplitText(".nav-btns", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

export function menuListners (){

    console.log("working");

    var linkContainer = document.querySelectorAll(".text-container");

    links.forEach((link, i) => {
        link.addEventListener("mouseenter", ()=>{
            console.log("mouse enter");
            

            let newText = document.createElement("h4");
            newText.innerHTML = " HEllO";
            newText.classList.add("link");
            linkContainer[i].appendChild(newText);

            gsap.to("h4.link",{duration:0.25, fontWeight:700, y:"-=80", onComplete: destoryTopLink});
            
            gsap.from(links[i] chars,{duration:0.25, fontWeight:700, y:"-=80"});
        })

        link.addEventListener("mouseleave", ()=>{
            console.log("mouse leave");
            // gsap.to(links[i],{duration:0.25, fontWeight:300, y:"-=80"});
        })
    });

    function destoryTopLink(){
        console.log("destory");
    }

}