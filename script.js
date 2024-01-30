gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          ".loader").style.visibility = "visible";
  } else {
      document.querySelector(
          ".loader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
};
const t1=gsap.timeline({defaults:{duration:1,ease:'bounce'},scrollTrigger:{trigger:'.welcome',scroller:'.smooth-scroll',end:'bottom 30%',toggleActions:'restart none restart none'}});
t1.from('.welcome',{yPercent:-100}) .from('.pf',{yPercent:-200},'<');
gsap.to('.p1',{
  transformOrigin:'top',
  opacity:0,
  scale:1.5,
  scrollTrigger:{
  trigger:'.p1',
  scroller:'.smooth-scroll',
  start:'top top',
  end:'bottom center',
  scrub:0.5
  }
});
gsap.to('.nav',{
  yPercent:100,
  ease:'power.in',
  scrollTrigger:{
  trigger:'.p1',
  scroller:'.smooth-scroll',
  start:'bottom 80%',
  end:'bottom center',
  scrub:0.5
  }
});

gsap.utils.toArray('.about').forEach((about,i)=>{
  ScrollTrigger.create({
    trigger:about,
    scroller: ".smooth-scroll",
    start:'top top',
    pin: true,
    pinSpacing:false
  });
});
let navtl=gsap.timeline({
  scrollTrigger:{
    trigger:'.p4',
    scroller:'.smooth-scroll',
    scrub:0.5,
    start:'top 10%',
    end:'top top'
  },defaults:{
    duration:1,ease:'power.in'
  }
});
navtl.to('.nav>.navhead',{yPercent:-100}) .to('.nav>.menu>.navmenu',{yPercent:-100},'<') .to('.nav>.menu>.navicon',{autoAlpha:1});




gsap.utils.toArray('.edu').forEach((edu,i)=>{
  gsap.to(edu,{opacity:1,yPercent:-40,
    ease:'power2.in',
  scrollTrigger:{
    trigger:edu,
    scroller: ".smooth-scroll",
    start:'top 95%',
    end:'bottom 95%',
    scrub:true
  }});
});
let education=gsap.timeline({
  scrollTrigger:{
    trigger:'.p5',
    scroller:'.smooth-scroll',
    scrub:1,
    start:'top 90%',
    end:'bottom bottom'
  },defaults:{
    duration:1,ease:'power.in'
  }
});
education.to('.p41',{yPercent:-200}) .to('.p42',{yPercent:-110},'<') ;
gsap.to('.p8>.circle',{
  scale:10,
  ease:'power.in',
  scrollTrigger:{
  trigger:'.p9',
  scroller:'.smooth-scroll',
  start:'top bottom',
  end:'top center',
  scrub:0.5,markers:true
  }
});






















ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
