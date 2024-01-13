let navMenu = $(".menu-wrapper");
let navbar = $(".navbar");
let menuMain = $(".menu-main");
let menuMainTop = $(".menu-main-top");
let menuMainLinks = $(".menu-link");
let menuSideImg = $(".menu-side-img-wrap");
let menuSideTop = $(".menu-side-top");
let menuCta = $(".menu-cta");
let menuBtn = $(".menu-button");
let menuBottom = $(".menu-main-bottom");

//Defining Consts
const EASE = "power2.out";
const DURATION = "0.5";

let openedMenu = gsap.timeline({ paused: true });
//Main menu container will now be mounted
openedMenu.set(navMenu, { display: "flex" });
//Main menu
openedMenu.from(menuMain, { width: "0%", ease: EASE, duration: DURATION }, "<");
//Top portion of left side
openedMenu.from(
  menuMainTop,
  {
    y: "-200%",
    ease: EASE,
    duration: DURATION,
  },
  "<"
);
//Animate main links
openedMenu.from(
  menuMainLinks,
  {
    x: "-60%",
    ease: "power1.out",

    stagger: "0.2",
  },
  "<"
);
//Animate top links from the side menu
openedMenu.from(
  menuSideTop,
  { y: "-100", ease: EASE, duration: DURATION },
  "<"
);
//Animate Img
openedMenu.from(
  menuSideImg,
  { width: "0%", ease: EASE, duration: DURATION },
  "<"
);
//Animate CTA
openedMenu.from(menuCta, { y: "200%", ease: EASE, duration: DURATION }, "<");
//Animate CTA Contents
openedMenu.from(
  menuCta.find("p"), // Find the first p tag inside the CTA
  { y: "40%", ease: EASE, duration: DURATION },
  "0.3"
);
openedMenu.from(
  menuCta.find("a"), //Find the first a tag inside the CTA
  { y: "200%", ease: EASE, duration: DURATION },
  "0.3"
);
//Animate all bottom links
openedMenu.from(
  menuBottom.find(".text-link"), //Find all of the links with this class inside of menuBottom div
  {
    y: "60%",
    ease: EASE,
    stagger: "0.1", // Stagger each child
    duration: DURATION,
  },
  "<"
);

//Toggle
menuBtn.on("click", () => {
  if (openedMenu.progress() === 0) {
    openedMenu.play();
  } else {
    openedMenu.reverse();
  }
});
