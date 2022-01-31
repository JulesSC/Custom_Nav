import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

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

gsap.set(".burger-lines", {transformOrigin:"center"});

const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)", {duration: 0.25, y:"+=8", fill: "rgba(56, 17, 19, 1)"})
.to(".burger-lines:nth-child(1)", {duration: 0.25, rotation: 45});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(2)", {duration: 0.25, y:"-=8", fill: "rgba(56, 17, 19, 1)"})
.to(".burger-lines:nth-child(2)", {duration: 0.25, rotation: -45});

const imageTL = new gsap.timeline();
imageTL.to("#splash", {duration: 0.25, scale: 3, blur:2, ease: "power1.out"});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL, "burger")
.add(bottomTL, "burger")
.add(imageTL, "burger");