gsap.from('.cloud-top', {
  duration: 1,
  x: 500,
  ease: 'power4'
});

gsap.from('.cloud-bottom', {
  duration: 1,
  x: -500,
  ease: 'power4',
  delay: .5
});

gsap.from('.title', {
  duration: .9,
  opacity: 0,
  delay: 1,
  ease: 'power4',
});

gsap.from('.middle-container', {
  duration: 1,
  y: 200
});

var abh = gsap.registerPlugin(ScrollTrigger);

gsap.from('.computer-img', {
  duration: 1,
  x: -100,
})


