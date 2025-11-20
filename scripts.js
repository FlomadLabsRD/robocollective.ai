const heroDynamic = document.querySelector(".hero-dynamic");
const phrases = ["adaptive", "intelligent", "human-centered"];
let phraseIndex = 0;

const rotateHeroPhrase = () => {
  phraseIndex = (phraseIndex + 1) % phrases.length;
  heroDynamic.textContent = phrases[phraseIndex];
};

setInterval(rotateHeroPhrase, 2800);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});

const yearTarget = document.getElementById("year");
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
