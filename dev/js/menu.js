import { gsap } from "gsap";

// we need a refernce to all of the link <a>
let links = document.querySelectorAll("#nav-container a");
console.log(links.length + " is the number of links in my nav-container");

// var tl = gsap.timeline(),
//   mySplitText = new SplitText(".nav-btns", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

var buttons = document.querySelectorAll(".nav-btns");
var tl = new gsap.timeline({paused:true});

export function menuListners (){

    console.log("working");

    // console.log(buttons[0].parentElement.firstChild + " is first child");

    gsap.to(buttons[1],{alpha:0});

    for(var i = 0; i < buttons.length; i++){
        
        let tops = document.querySelectorAll(".top");
        // var top = buttons[i].firstChild;
        var bottom = buttons[i].parentElement.lastChild;

        console.log(tops + " is top element");
        // console.log(top + " is top element in array");

        tl.to(tops[i],{duration:0.5, y:"-=65", ease: "power1.out"},"same");
        tl.to(bottom,{duration:0.5, y:"-=65", ease: "power1.out"}, "same");
        
        buttons[i].addEventListener("mouseenter", () =>{
        console.log("enter");
            tl.restart();
            tl.play();
        })
    
        buttons[i].addEventListener("mouseleave", () =>{
            console.log("leave");
            tl.restart();
            tl.play();
            })
        }

    // var linkContainer = document.querySelectorAll(".nav-btns");

    // var tl = new gsap.timeline({paused:true});
    // tl.to(".top",{duration:0.5, y:"-=65", ease: "power1.out"},"same");
    // tl.to(".bottom",{duration:0.5, y:"-=65", ease: "power1.out"}, "same");

    // links.forEach((link, i) => {
    //     link.addEventListener("mouseenter", ()=>{
    //         console.log("mouse enter");
    //             // tl.restart();
    //             // tl.play();
    // //         gsap.to("h4.link",{duration:0.25, fontWeight:700, y:"-=80", onComplete: destoryTopLink});
    //         gsap.to(links[i],{duration:0.25, fontWeight:700, y:"-=80"});
    //     })

    //     link.addEventListener("mouseleave", ()=>{
    //         console.log("mouse leave");
    //             // tl.restart();
    //             // tl.play();
    //         gsap.to(links[i],{duration:0.25, fontWeight:300, y:"-=80"});
    //     })
    // });
}