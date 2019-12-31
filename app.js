const skillSection = document.querySelector(".skills");
const content = document.querySelector(".dev-image");
var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

tl.from(skillSection, 0.1, { opacity: 0 });

const scene = new ScrollMagic.Scene({
  triggerElement: skillSection,
  triggerHook: "onleave",
  duration: "50%"
})
  .setPin(skillSection)
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
}
