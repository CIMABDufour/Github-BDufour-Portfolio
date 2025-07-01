// //New toggle for light and dark mode. Need to revisit the concept if it's <<efficient or not>>
// //Need to rework the text ... I believe it could be more efficient

let themeSwitchlightmodetxt = "Light Mode"
let themeSwitchdarkmodetxt = "Dark Mode"

// let darkmode = localStorage.getItem("darkmode")
// const themeSwitch = document.getElementById("theme-switch")
// // const themeSwitchtxt = document.getElementById("mode-name")

// const enableDarkmode = () =>{
//     document.body.classList.add("darkmode")
//     localStorage.setItem("darkmode","active")
//     document.querySelector("body").classList.toggle("modetransition")
//     // themeSwitchtxt.innerText = themeSwitchdarkmodetxt
// }

// const disableDarkmode = () =>{
//     document.body.classList.remove("darkmode")
//     localStorage.setItem("darkmode",null)
//     document.querySelector("body").classList.toggle(".modetransition_")
//     // themeSwitchtxt.innerText = themeSwitchlightmodetxt
// }

// if(darkmode === "disable") enableDarkmode()

// themeSwitch.addEventListener("click",()=>{
//     darkmode = localStorage.getItem("darkmode")
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode()
// })