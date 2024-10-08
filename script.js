const menuSettings = document.querySelector(".menu-setting")
const darkModeBtn = document.querySelector("#darkmode-btn")

function menuSettingsToggle() {
    menuSettings.classList.toggle("max-height-toggle")
}

darkModeBtn.addEventListener("click", () => {
    darkModeBtn.classList.toggle("darkmode-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark")
    }
    else if(localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light")
    }
})

if(localStorage.getItem("theme") == "light") {
    darkModeBtn.classList.remove("darkmode-on")
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "dark") {
    darkModeBtn.classList.add("darkmode-on")
    document.body.classList.add("dark-theme")
}
else {
    localStorage.setItem("theme", "light")
}