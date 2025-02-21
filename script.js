console.log("hiiiiiiiiiiiiiiiii")
// selecting elements 
var slider_left_arrow = document.getElementById("slider_left_arrow")
var slider_right_arrow = document.getElementById("slider_right_arrow")
var image_container = document.getElementById("image_container")

// slider_right_arrow.addEventListener("click", function () {
//     image_container.style.left = '-100vw'
// })

// ad section close btn  - top page advertisement
var ad_close_btn = document.getElementById("ad_close_btn")
var ad_close_section = document.getElementById("ad_close_section")

ad_close_btn.addEventListener("click", function () {
    ad_close_section.style.display = "none"
})

console.log(ad_close_section)
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

// var new_arrival = document.getElementById("new_arrival")
// var new_arrival_section = document.getElementById("new_arrival_section")
// new_arrival.addEventListener("click", function(){
//     new_arrival_section.style.marginTop=0
// })