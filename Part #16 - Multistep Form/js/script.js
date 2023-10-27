const prevBtn = document.querySelectorAll(".prev"),
  nextBtn = document.querySelectorAll(".next"),
  progress = document.querySelector(".progress"),
  formSteps = document.querySelectorAll(".form-step"),
  step = document.querySelectorAll(".step");

let currentStep = 0;

let showFormSteps = () => {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  formSteps[currentStep].classList.add("form-step-active");
};

let showProgress = () => {
  step.forEach((progressStep, i) => {
    if (i < currentStep + 1) {
      progressStep.classList.add("active");
    } else {
      progressStep.classList.remove("active");
    }
  });

  const progressActive = document.querySelectorAll(".active");

  progress.style.width =
  ((progressActive.length - 1) / (step.length - 1)) * 100 + "%";
};

nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep++;
    showFormSteps();
    showProgress();
  });
});

prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentStep--;
    showFormSteps();
    showProgress();
  });
});