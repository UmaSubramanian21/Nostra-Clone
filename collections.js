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

// Collection Page js
//  search bar functinaity
var dress_container_sec = document.getElementById("dress_container_sec")
var search = document.getElementById("search")
// inside of dress div texts
var namelist = dress_container_sec.querySelectorAll("div")
console.log(namelist)
// search bar
search.addEventListener("keyup", function (event) {
    var enteredValues = event.target.value.toUpperCase()
    // console.log(event.target.value)
    for (count = 0; count < namelist.length; count = count + 1) {
        if (namelist[count].textContent.toUpperCase().indexOf(enteredValues) < 0) {
            namelist[count].style.display = "none"
        }
        else {
            namelist[count].style.display = "block"
        }

    }
}
)

// check box fucntions

var check = document.getElementsByName("check")
var namelist_values=namelist.textContent
for (count = 0; count < check.length; count = count + 1) {
    check[count].addEventListener("click", function (event) {
        if (event.target.checked) {

            for (count = 0; count < namelist.length; count = count + 1) {
                if (namelist[count].textContent.toUpperCase().indexOf(event.target.value.toUpperCase()) < 0) {
                    namelist[count].style.display = "none"
                }
                else {
                    namelist[count].style.display = "block"
                }
        
            }
        }
        // if uncheck 
        else {
            console.log("uncheck", event.target.value)
            namelist[count].style.display = "block"
        }
    })
}
// for (count = 0; count < check.length; count = count = 1) {
//     check[count].addEventListener("click", function (event) {
//         if (check[count].event.target.value.toUpperCase().indexOf(namelist.value)<0) {
//             console.log("ok")
//         }
//     })
// }