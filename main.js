(function () {
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("nav-drawer");
  if (!toggle || !drawer) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.hidden = !open;
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setOpen(false);
    }
  });
})();


// Lead form

let currentStep = 0;
const steps = document.querySelectorAll(".form-step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });

  prevBtn.style.display = index === 0 ? "none" : "inline-flex";

  if (index === steps.length - 1) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }
}

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);


//Scroll to top

  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
