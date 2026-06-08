const menuIcon = document.querySelector(".menu-icon");
const dropDownMenu = document.querySelector(".drop-down-menu");
const closeIcon = document.querySelector(".close-icon");
// features
const featuresBtn = document.querySelector(".features-container");
const featuresMenu = document.querySelector(".features-menu");
const featuresArrowDown = document.querySelector(".features-arrow-down");
const featuresArrowUp = document.querySelector(".features-arrow-up");
// company
const companyBtn = document.querySelector(".company-container");
const companyMenu = document.querySelector(".company-menu");
const companyArrowDown = document.querySelector(".company-arrow-down");
const companyArrowUp = document.querySelector(".company-arrow-up");

// features large screen
const featuresBtnLarge = document.querySelector(".features-container-1");
const featuresMenu1 = document.querySelector(".features-menu-1");
const featuresArrowDown1 = document.querySelector(".features-arrow-down-1");
const featuresArrowUp1 = document.querySelector(".features-arrow-up-1");

// company large screen
const companyBtnLarge = document.querySelector(".company-container-1");
const companyMenu1 = document.querySelector(".company-menu-1");
const companyArrowDown1 = document.querySelector(".company-arrow-down-1");
const companyArrowUp1 = document.querySelector(".company-arrow-up-1");

menuIcon.addEventListener("click", () => {
  if (dropDownMenu.classList.contains("hidden")) {
    dropDownMenu.classList.remove("hidden");
  }
});

closeIcon.addEventListener("click", () => {
  if (!dropDownMenu.classList.contains("hidden")) {
    dropDownMenu.classList.add("hidden");
  }
});

featuresBtn.addEventListener("click", () => {
  if (featuresMenu.classList.contains("hidden")) {
    featuresMenu.classList.remove("hidden");
    featuresArrowDown.classList.add("hidden");
    featuresArrowUp.classList.remove("hidden");
  } else {
    featuresMenu.classList.add("hidden");
    featuresArrowDown.classList.remove("hidden");
    featuresArrowUp.classList.add("hidden");
  }
});

companyBtn.addEventListener("click", () => {
  if (companyMenu.classList.contains("hidden")) {
    companyMenu.classList.replace("hidden", "flex");
    companyArrowDown.classList.add("hidden");
    companyArrowUp.classList.remove("hidden");
  } else {
    companyMenu.classList.replace("flex", "hidden");
    companyArrowDown.classList.remove("hidden");
    companyArrowUp.classList.add("hidden");
  }
});

featuresBtnLarge.addEventListener("click", () => {
  if (featuresMenu1.classList.contains("md:hidden")) {
    featuresMenu1.classList.replace("md:hidden", "md:block");
    featuresArrowDown1.classList.add("hidden");
    featuresArrowUp1.classList.remove("hidden");
  } else {
    featuresMenu1.classList.add("md:hidden");
    featuresArrowDown1.classList.remove("hidden");
    featuresArrowUp1.classList.add("hidden");
  }
});

companyBtnLarge.addEventListener("click", () => {
  if (companyMenu1.classList.contains("md:hidden")) {
    companyMenu1.classList.replace("md:hidden", "md:flex");
    companyArrowDown1.classList.add("hidden");
    companyArrowUp1.classList.remove("hidden");
  } else {
    companyMenu1.classList.replace("md:flex", "md:hidden");
    companyArrowDown1.classList.remove("hidden");
    companyArrowUp1.classList.add("hidden");
  }
});
