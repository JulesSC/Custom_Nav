import { gsap } from "gsap";
import { menuAnimation } from "./moveMenu";

(function() {
    const blurProperty = gsap.utils.checkPrefix("filter"),
          blurExp = /blur\((.+)?px\)/,
          getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];
  
    gsap.registerPlugin({
      name: "blur",
      get(target) {
        return +(getBlurMatch(target)[1]) || 0;
      },
      init(target, endValue) {
        let data = this,
            filter = gsap.getProperty(target, blurProperty),
            endBlur = "blur(" + endValue + "px)",
            match = getBlurMatch(target)[0],
            index;
        if (filter === "none") {
          filter = "";
        }
        if (match) {
          index = filter.indexOf(match);
          endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
        } else {
          endValue = filter + endBlur;
          filter += filter ? " blur(0px)" : "blur(0px)";
        }
        data.target = target; 
        data.interp = gsap.utils.interpolate(filter, endValue); 
      },
      render(progress, data) {
        data.target.style[blurProperty] = data.interp(progress);
      }
    });
  })();

const burgerBtn = document.querySelector("#burger-container");

gsap.set("#top-line", {transformOrigin:"left center", scaleX: 0.5});
gsap.set("#middle-line", {transformOrigin:"center center"});
gsap.set("#bottom-line", {transformOrigin:"right center", scaleX: 0.5});
gsap.set("svg", {scale: 1, alpha: 0});


let isMenuOpen = false;
let burgerAnimation = gsap.timeline({paused:true});

burgerAnimation.from("#top-line, #bottom-line",{duration:0.25, scaleX:1, ease: "back.out(1)"})
.to("#splash", {duration: 0.25, blur:0.5})
.addPause("backToLines")
.addLabel("openMenu")
.to("#top-line",{duration:0.25, rotation:45,y:"-=9", x:"+=10", ease: "back.out(1)", backgroundColor: "rgba(56, 17, 19, 1)"},"cross")
.to("#middle-line",{duration:0.25, rotation:-45, y:"-=2", ease: "back.out(1)", backgroundColor: "rgba(56, 17, 19, 1)"},"cross")
.to("#bottom-line",{duration:0.25, rotation:45, y:"+=9", x:"-=10", ease: "back.out(1)", backgroundColor: "rgba(56, 17, 19, 1)"},"cross")
.to("#splash", {duration: 0.25, scale: 3, blur:2, ease: "power1.out"}, "cross")
.from("svg", {duration: 0.25, scale: 0, alpha: 1, ease: "power1.out"}, "cross")
.addPause()
.addLabel("closeMenu")
.to("#top-line",{duration:0.25, rotation:0,y:"+=9", x:"-=10", ease: "back.out(1)", backgroundColor: "rgba(0, 0, 0, 0)"},"uncross")
.to("#middle-line",{duration:0.25, rotation:0, y:"+=2", ease: "back.out(1)", backgroundColor: "rgba(0, 0, 0, 0)"},"uncross")
.to("#bottom-line",{duration:0.25, rotation:0, y:"-=9", x:"+=10", ease: "back.out(1)", backgroundColor: "rgba(0, 0, 0, 0)"},"uncross")
.to("#splash", {duration: 0.25, scale: 1, blur:0, ease: "power1.out"}, "uncross")
// .from("svg", {duration: 0.25, scale: 0, alpha: 1, fill: "rgba(56, 17, 19, 1)", immediateRender: false , ease: "power1.out"}, "uncross")

export function burgerActions(){
  burgerBtn.addEventListener("mouseenter",() =>{
      console.log("enter");
      console.log(burgerBtn.classList.contains("selected"));

      //check to see if the class of selected is on the burger container, and if so don't allow the mouse enter animation
      if(!burgerBtn.classList.contains("selected")){
          burgerAnimation.play();
      }
  });
  
  burgerBtn.addEventListener("mouseleave",() =>{
      console.log("leave");
      //check to see if the class of selected is on the burger container, and if so don't allow the mouse enter animation
      if(!burgerBtn.classList.contains("selected")){
          burgerAnimation.reverse("backToLines");
      }
  });

  burgerBtn.addEventListener("click",(e) =>{
      console.log("click");
      // call the resize function
      // resizePage(isMenuOpen);
      
      if(isMenuOpen === false){
          // animate the burger into an X
          burgerAnimation.play("openMenu");
          menuAnimation.play();
          // add a class to the burger container of selected
          burgerBtn.classList.add("selected");
          isMenuOpen = true;
      }else{
          e.preventDefault;
          // animate the burger into an X
          burgerAnimation.play("closeMenu");
          menuAnimation.reverse();
          // add a class to the burger container of selected
          burgerBtn.classList.remove("selected");
          isMenuOpen = false;
      }
  });
}