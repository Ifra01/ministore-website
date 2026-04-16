let menuIcon = document.querySelector(".menu");
let navigationBar = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
    navigationBar.classList.toggle("left-[0px]")
})

let iphone10 = document.querySelector("#iphone10");
iphone10.addEventListener("click", () => {
    window.location.href = "mobile-products/iphone-10.html"
})

