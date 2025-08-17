// Last updated text (kept from your resume)
document.getElementById('lastUpdated').textContent = '30 June 2025';

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Navbar active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav nav a');

function setActiveLink() {
  let fromTop = window.scrollY + 90;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav nav a[href="#${sec.id}"]`);
    if (!link) return;
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    if (fromTop >= top && fromTop < bottom) {
      navLinks.forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
}
setActiveLink();
window.addEventListener('scroll', setActiveLink);

// Reveal animations per section
gsap.utils.toArray('.reveal-up').forEach((el) => {
  gsap.to(el, {
    opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 85%" }
  });
});

gsap.utils.toArray('.reveal-fade').forEach((el) => {
  gsap.to(el, {
    opacity: 1, duration: 0.8, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 85%" }
  });
});

gsap.utils.toArray('.reveal-slide').forEach((el) => {
  gsap.to(el, {
    opacity: 1, x: 0, duration: 0.9, ease: "power2.out",
    scrollTrigger: { trigger: el, start: "top 85%" }
  });
});

// Subtle parallax on alt sections
gsap.utils.toArray('.section.alt').forEach((sec) => {
  gsap.fromTo(sec, { backgroundPositionY: "0%" }, {
    backgroundPositionY: "40%",
    ease: "none",
    scrollTrigger: {
      trigger: sec,
      scrub: 0.5
    }
  });
});
