function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 120,
    stagger: 0.1,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1 ", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow <= 100) {
          h5timer.innerHTML = grow++;
        } else {
          grow = 100;
          // console.log();
        }
      }, 35);
    },
  });
  tl.to(".line  h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4,
  });
  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    duration: 0.6,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#pc1 h1, #pc2 h1 , #pc3 h2 , #pc4 h1", {
    y:140,
    stagger: 0.2,
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
}
loadingAnimation();

cursorAnimation();

Shery.makeMagnet("#nav-part2 p ,#navi", {});

