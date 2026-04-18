let menuIcon = document.querySelector(".menu");
let navigationBar = document.querySelector(".navigation");

menuIcon.addEventListener("click", () => {
    navigationBar.classList.toggle("left-[0px]")
})

let iphone10 = document.querySelector("#iphone10");
iphone10.addEventListener("click", () => {
    window.location.href = "mobile-products/iphone-10.html"
})

let iphone11 = document.querySelector("#iphone11");
iphone11.addEventListener("click", () => {
    window.location.href = "mobile-products/iphone-11.html"
})

let iphone8 = document.querySelector("#iphone8");
iphone8.addEventListener("click", () => {
    window.location.href = "mobile-products/iphone-8.html"
})

let iphone13 = document.querySelector("#iphone13");
iphone13.addEventListener("click", () => {
    window.location.href = "mobile-products/iphone-13.html"
})

let spottedWatch = document.querySelector("#spottedWatch");
spottedWatch.addEventListener("click", () => {
    window.location.href = "smart-watches/spotted-watch.html"
})

let pinkWatch = document.querySelector("#pinkWatch");
pinkWatch.addEventListener("click", () => {
    window.location.href = "smart-watches/pink-watch.html"
})

let heavyWatch = document.querySelector("#heavyWatch");
heavyWatch.addEventListener("click", () => {
    window.location.href = "smart-watches/heavy-watch.html"
})

let blackWatch = document.querySelector("#blackWatch");
blackWatch.addEventListener("click", () => {
    window.location.href = "smart-watches/black-watch.html"
})