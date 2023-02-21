const parent = document.querySelector(".section__dashboard-lisn");
const navBtn = document.querySelectorAll(".section__dashboard-btn");

navBtn.forEach((item, i, arr) => {
  item.addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("section__dashboard-btn")) {
      for (let i = 0; i < navBtn.length; i++) {
        arr[i].classList.remove("active");
      }
      target.classList.add("active");
    }
  });
});
