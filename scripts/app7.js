const socialBtn = document.querySelector(".col-4a");
const socialImg = document.querySelector(".socials");

socialBtn.addEventListener("click", () => {
  socialImg.classList.toggle("active-social");
  socialImg.classList.toggle("social-mobile-active");
});
