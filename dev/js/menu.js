import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

// we need a refernce to all of the link <a>
let links = document.querySelectorAll("#nav-container a");
console.log(links.length + " is the number of links in my nav-container");

// var tl = gsap.timeline(),
//   mySplitText = new SplitText(".nav-btns h4", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// console.log(chars);

// tl.from(chars, {
//   duration: 0.8,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01
// });

var buttons = document.querySelectorAll("li");

export function menuListners (){

    console.log("working");

    buttons.forEach((button, i) => {
        // console.log(i);
        var top = buttons[i].children[0].children[0];
        var bottom = buttons[i].children[0].children[1];

        var tl = new gsap.timeline({paused:true});

        // Should highlight the chars within both the previously defined top and bottom vars,
        // only logs chars in var = top
        // var mySplitText = new SplitText(top, bottom, { type: "words,chars" });

        // highlights all characters in nav-btns
        // logs all chars four times over
        // var mySplitText = new SplitText("nav-btns", { type: "words,chars" });
        
        // console.log(mySplitText.chars);
        
        // necessary to define chars but throws error thta chars is undef
        // chars = mySplitText.chars; //an array of all the divs that wrap each character

        // if line 41 worked, then chars themselves could be commanded without top or bottom preface
        // tl.to(chars, {duration:0.5, y:-65, ease: "power1.out", stagger: 0.01},"same");

        // since top and bottom and bottom target only hovered h4, chars or top or bottom are specified
        // tl.to(top.chars, {duration:0.5, y:-65, ease: "power1.out", stagger: 0.01},"same")
        // .to(bottom.chars, {duration:0.5, y:-65, ease: "power1.out", stagger: 0.01}, "same");

        // current working code for general hover
        tl.to(top, {duration:0.5, y:-65, ease: "power1.out"},"same")
        .to(bottom, {duration:0.5, y:-65, ease: "power1.out"}, "same");
        
        button.addEventListener("mouseenter", () =>{
            console.log("enter");
            tl.restart();
            tl.play();
        })

        button.addEventListener("mouseleave", () =>{
            console.log("leave");
            tl.restart();
            tl.play();
        })
    });
}