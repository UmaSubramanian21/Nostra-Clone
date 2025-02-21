// side nav bar click events
var side_navbar = document.getElementById("side_navbar")
var side_navbar_close = document.getElementById("side_navbar_close")
var menu_icon = document.getElementById("menu_icon")

menu_icon.addEventListener("click", function () {
    side_navbar.style.display = "block"
})
side_navbar_close.addEventListener("click", function () {
    side_navbar.style.display = "none"
})