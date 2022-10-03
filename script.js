let test = window.matchMedia("(min-width: 1150px)")
function test1() {
    console.log("test")
}
if (test.matches) {
    console.log("test")
}

test.onchange = (e) => {
    if (e.matches) {
        console.log("small")
    } else {
        console.log("big")
    }
}

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", () => {
    const bodyElement = document.querySelector("body");
    const sidebarContainer = document.querySelector(".sidebar-container");
    if (sidebarContainer.style.height === "100vh") {
        // remove menu
        sidebarContainer.style.height = "100px";
        bodyElement.style.overflow = "visible";
    } else {
        // display menu
        sidebarContainer.style.height = "100vh";
        bodyElement.style.overflow = "hidden";
    }
})

menuButton();