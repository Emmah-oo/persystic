const socialBtn = document.querySelector(".col-4a");
const socialImg = document.querySelector(".socials");
const days = (document.querySelector(".days-indc").innerText = "Days");
const hours = (document.querySelector(".hours-indc").innerText = "hours");
const minutes = (document.querySelector(".minutes-indc").innerText = "minutes");
const seconds = (document.querySelector(".seconds-indc").innerText = "seconds");

socialBtn.addEventListener("click", () => {
  socialImg.classList.toggle("active-social");
  socialImg.classList.toggle("social-mobile-active");
});

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "06/20/",
    launchDay = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > launchDay) {
    launchDay = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(launchDay).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      document.querySelector(".day").innerText = Math.floor(distance / day);
      (document.querySelector(".hour").innerText = Math.floor(
        (distance % day) / hour
      )),
        (document.querySelector(".minute").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.querySelector(".second").innerText = Math.floor(
          (distance % minute) / second
        ));
    }, 0);
})();
