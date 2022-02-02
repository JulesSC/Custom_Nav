import { gsap } from "gsap";

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

gsap.set(".burger-lines", {transformOrigin:"center"});

let isMenuOpen = false;
let burgerAnimation = gsap.timeline({paused:true});

burgerAnimation.to(".burger-lines",{duration:0.25, scaleX:0.75})
// .to("#splash", {duration: 0.25, blur:1, ease: "power1.out"})
.addPause("backToLines")
.addLabel("openMenu")
.to("#top-line",{duration:0.25, rotation:-45,y:"-=2", backgroundColor: "rgba(56, 17, 19, 1)"},"cross")
.to("#bottom-line",{duration:0.25, rotation:45,y:"+=2", backgroundColor: "rgba(56, 17, 19, 1)"},"cross")
.to("#splash", {duration: 0.25, scale: 3, blur:2, ease: "power1.out"}, "cross")
.addPause()
.addLabel("closeMenu")
.to("#top-line",{duration:0.25, rotation:0,y:"+=2", backgroundColor: "rgba(0, 0, 0, 0)"},"uncross")
.to("#bottom-line",{duration:0.25, rotation:0,y:"-=2", backgroundColor: "rgba(0, 0, 0, 0)"},"uncross")
.to("#splash", {duration: 0.25, scale: 1, blur:0, ease: "power1.out"}, "uncross")

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
          // add a class to the burger container of selected
          burgerBtn.classList.add("selected");
          isMenuOpen = true;
      }else{
          e.preventDefault;
          // animate the burger into an X
          burgerAnimation.play("closeMenu");
          // add a class to the burger container of selected
          burgerBtn.classList.remove("selected");
          isMenuOpen = false;
      }
  });
}




// const topTL = new gsap.timeline();
// topTL.to(".burger-lines:nth-child(1)", {duration: 0.25, y:"+=8", backgroundColor: "rgba(56, 17, 19, 1)"})
// .to(".burger-lines:nth-child(1)", {duration: 0.25, rotation: 45});

// const bottomTL = new gsap.timeline();
// bottomTL.to(".burger-lines:nth-child(2)", {duration: 0.25, y:"-=8", backgroundColor: "rgba(56, 17, 19, 1)"})
// .to(".burger-lines:nth-child(2)", {duration: 0.25, rotation: -45});

// const imageTL = new gsap.timeline();
// imageTL.to("#splash", {duration: 0.25, scale: 3, blur:2, ease: "power1.out"});

// export const burgerTL = new gsap.timeline({paused:true});

// burgerTL.add(topTL, "burger")
// .add(bottomTL, "burger")
// .add(imageTL, "burger");