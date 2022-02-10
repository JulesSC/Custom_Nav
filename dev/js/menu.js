import { gsap } from "gsap";
gsap.registerPlugin(SplitText);

// we need a refernce to all of the link <a>
let links = document.querySelectorAll("#nav-container a");
console.log(links.length + " is the number of links in my nav-container");

// var tl = gsap.timeline(),
//   mySplitText = new SplitText(".nav-btns", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// var tl = gsap.timeline(),
//   mySplitText = new SplitText("#quote", { type: "words,chars" }),
//   chars = mySplitText.chars; //an array of all the divs that wrap each character

// gsap.set("#quote", { perspective: 400 });

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
// var tl = new gsap.timeline({paused:true});

export function menuListners (){

    console.log("working");

    buttons.forEach((button, i) => {
        // console.log(i);
        var top = buttons[i].children[0].children[0];
        var bottom = buttons[i].children[0].children[1];

        var tl = new gsap.timeline({paused:true});
        tl.to(top,{duration:0.5, y:-65, ease: "power1.out"},"same")
        .to(bottom,{duration:0.5, y:-65, ease: "power1.out"}, "same");

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