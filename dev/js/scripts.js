// import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// gsap.registerPlugin(GSDevTools, MorphSVGPlugin);
// MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

// const mainTL = gsap.timeline();

// function expandBase(){
//     const tl = gsap.timeline();
//     tl.from("#Base-Line", {duration: 0.5, ease: "back.out(1.7)", scaleX:0, transformOrigin: "center center", autoAlpha:0});
//     tl.from("#Base-Line", {duration: 0.1, alpha:0});
//     return tl;
// }

// function stepTwo(){
//     const tl = gsap.timeline();
//     tl.from("#Step-Two", {duration: .01, autoAlpha:0});
//     tl.from("#Step-Two", {duration: 0.5, ease: "power4.out", scaleY:0, transformOrigin: "center center"});
//     tl.from("#Step-Two", {duration: .01, alpha:0});
//     return tl;
// }

// function dropG(){
//     const tl = gsap.timeline();
//     tl.from("#Final", {duration: .01, autoAlpha:0});
//     tl.from(".upper", {duration: 0.5, ease: "power4.out", scaleY:0, transformOrigin: "top center"}, "try");
//     tl.from(".lower", {duration: 0.5, ease: "power4.out", scaleY:0, transformOrigin: "bottom center"}, "try");
//     tl.from("#First-Left-Small, #First-Right-Small", {duration: .01, autoAlpha:0});
//     tl.to("#First-Left-Small", {duration: 1, ease: "back.out(1.7)", delay: .5, morphSVG:"#Left-Ellipse"}, "trying");
//     tl.to("#First-Right-Small", {duration: 1, ease: "back.out(1.7)", delay: .55, morphSVG:"#Right-Ellipse"}, "trying");
//     tl.to("#First-Left-Small, #First-Right-Small", {duration: .01, alpha:0});
//     return tl;
// }

// function morphEllipseLeft(){
//     const tl = gsap.timeline();
//     tl.to("#Left-Ellipse", {duration: .01, autoAlpha:1}, "-=.5");
//     tl.to("#Left-Ellipse", {duration: 0.5, ease: "power4.out", y:"-=180", delay: 0.15, morphSVG:"#Left-Surfboard-First"});
//     tl.to("#Left-Ellipse", {duration: 0.5, ease: "back.out(1.7)", y:"-=250", morphSVG:"#Left-Ellipse"});
//     tl.to("#Left-Ellipse", {duration: 0.25, y:"+=70"});
//     tl.to("#Left-Ellipse", {duration: .01, alpha:0});
//     return tl;
// }

// function morphEllipseRight(){
//     const tl = gsap.timeline();
//     tl.to("#Right-Ellipse", {duration: .01, autoAlpha:1}, "-=.5");
//     tl.to("#Right-Ellipse", {duration: 0.5, ease: "power4.out", y:"+=180", delay: 0.25, morphSVG:"#Right-Surfboard-First"});
//     tl.to("#Right-Ellipse", {duration: 0.5, ease: "back.out(1.7)", y:"+=250", morphSVG:"#Right-Ellipse"});
//     tl.to("#Right-Ellipse", {duration: 0.25, y:"-=70"});
//     tl.to("#Right-Ellipse", {duration: .01, alpha:0});
//     return tl;
// }

// function flipWaveLower(){
//     const tl = gsap.timeline();
//     tl.to(".lower", {duration: 0.5, ease: "power4.out", scaleY:-1, stagger: 0.07});
//     return tl;
// }

// function lineOne(){
//     const tl = gsap.timeline();
//     tl.to("#Line-1", {duration: 0.25, ease: "power4.out", scaleY:0.25});
//     tl.to("#Line-1", {duration: 0.25, ease: "power4.out", scaleY:0.6, transformOrigin: "center bottom"});
//     return tl;
// }

// function lineSeven(){
//     const tl = gsap.timeline();
//     tl.to("#Line-7", {duration: 0.25, ease: "power4.out", scaleY:0.25, transformOrigin: "center bottom", delay:0.15});
//     tl.to("#Line-7", {duration: 0.25, ease: "power4.out", scaleY:0.6, transformOrigin: "center top"});
//     return tl;
// }

// function lineFour(){
//     const tl = gsap.timeline();
//     tl.to("#Line-4", {duration: 0.25, ease: "power4.out", scaleY:1.25, transformOrigin: "center center", delay:0.15});
//     return tl;
// }

// function lineInterior(){
//     const tl = gsap.timeline();
//     tl.to(".lineInterior", {duration: 0.5, ease: "power4.out", scaleY:-1, stagger: 0.5, transformOrigin: "center center"});
//     return tl;
// }

// function flipWaveUpper(){
//     const tl = gsap.timeline();
//     tl.to(".upper", {duration: 0.5, ease: "power4.out", scaleY:-1, transformOrigin: "center bottom", delay: 0.1, stagger: 0.07});
//     return tl;
// }

// function ellipseLeftEnd(){
//     const tl = gsap.timeline();
//     tl.to("#Left-Ellipse-2", {duration: .01, autoAlpha:1}, "-=1");
//     tl.to("#Left-Ellipse-2", {duration: 0.5, ease: "power4.out", y:"+=200", morphSVG:"#Left-Surfboard-Third"});
//     return tl;
// }

// function ellipseRightEnd(){
//     const tl = gsap.timeline();
//     tl.to("#Right-Ellipse-2", {duration: .01, autoAlpha:1}, "-=1");
//     tl.to("#Right-Ellipse-2", {duration: 1, ease: "power4.out", y:"-=200", morphSVG:"#Right-Surfboard-Third"});
//     return tl;
// }

// function groupTwo(){
//     const tl = gsap.timeline();
//     tl.to("#Group-1, #Group-3", {duration: .5, ease: "power4.out", y:"+=130", delay: 0.1});
//     return tl;
// }

// function groupFive(){
//     const tl = gsap.timeline();
//     tl.to("#Group-4, #Group-6", {duration: .5, ease: "power4.out", y:"-=130", delay: 0.1});
//     return tl;
// }

// function lines(){
//     const tl = gsap.timeline();
//     tl.to(".lineCenter", {duration: 1, ease: "power4.out", scaleY:0.25, transformOrigin: "center center"}, "go" );
//     tl.to("#Line-2, #Line-3", {duration: 1, ease: "power4.out", scaleY:-0.25, transformOrigin: "center top"}, "go");
//     tl.to("#Line-5, #Line-6", {duration: 1, ease: "power4.out", scaleY:-0.25, transformOrigin: "center bottom"}, "go");
//     tl.to("#Line-1", {duration: 1, ease: "power4.out", y:"+=130", transformOrigin: "center bottom"}, "go");
//     tl.to("#Line-7", {duration: 1, ease: "power4.out", y:"-=130", transformOrigin: "center top"}, "go");
//     return tl;
// }

// function final(){
//     const tl = gsap.timeline();
//     tl.to("#Final", {duration: 0.5, ease: "power4.out", scaleY:0, transformOrigin: "center center"});
//     tl.to("#Base-Line", {duration: 0.15, alpha:1}, "-=.5");
//     tl.to("#Base-Line", {duration: 0.25, ease: "power4.out", scaleX:0, transformOrigin: "center center"});
//     tl.to("#preloader", {duration: 0.25, alpha:0, onComplete:removePreloader});
//     return tl;
// }

// function removePreloader(){
//     window.scrollTo(0,0);
//     gsap.set("#preloader", {display:none});
// }

// function heroAnimation(){
//     const tl = gsap.timeline();
//     tl.from("#hero",{duration:1, y:"+=100"}, "madeUp");
//     tl.from("header",{duration:1, alpha:0, y:"+=100"}, "madeUp");
//     tl.from("#content",{duration:1, y:"+=100"}, "madeUp");
//     tl.from("header ul",{duration:0.5, alpha:0, y:"+=10", delay: 0.2}, "madeUP");
//     tl.from("#hero >div",{duration:0.5, alpha:0, y:"+=5", delay: 0.2}, "madeUP");
//     tl.from("#hero >div section",{duration:0.5, rotation: 180}, "madeUP");
//     return tl;
// }

// mainTL.add(expandBase())
// .add(stepTwo(), "-=0.15")
// .add(dropG(), "-=0.15")
// .add(flipWaveLower(), "morph")
// .add(morphEllipseLeft(), "morph")
// .add(flipWaveUpper(), "morph")
// .add(morphEllipseRight(), "morph")
// .add(lineOne(), "morph")
// .add(lineSeven(), "morph")
// .add(lineFour(), "morph")
// .add(lineInterior(), "morph")
// .add(ellipseLeftEnd(), "madeUp")
// .add(ellipseRightEnd(), "madeUp")
// .add(groupTwo(), "madeUp")
// .add(groupFive(), "madeUp")
// .add(lines(), "madeUp")
// .add(final())
// .add(heroAnimation());

// GSDevTools.create();

// /* =============
//     Hero
// ============= */


