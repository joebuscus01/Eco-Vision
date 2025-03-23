
let name = localStorage.getItem("name")
let price = localStorage.getItem("price")
let img = localStorage.getItem("img")
let fit = localStorage.getItem("fit")


document.querySelector(".product-img").src = img
document.querySelector(".product-img").alt = name


document.querySelector("#name").textContent = name
document.querySelector("#price").textContent = price
document.querySelector("title").textContent = name //+ " ~ Ecovision Products"
 document.querySelector(".product-desc").textContent = fit
 // history.pushState(null, '', '/' + name); ADJUST URL FIX LATER







