let test = window.matchMedia("(min-width: 1151px)")
function test1() {
    console.log("test")
}
// if (!test.matches) {
//     testAddMenuButton();
//     addMenuFunctionality();
// }

test.onchange = (e) => {
    if (e.matches) {
        // when screen grow above 1150px
        removeMenuButton();
        console.log("above 1150")
    } else {
        // when screen shrink at or below 1150px
        testAddMenuButton();
        addMenuFunctionality();
        console.log("below 1150")
    }
}

const testAddMenuButton = () => {
    const sidebarHeader = document.querySelector(".sidebar-header");
    const testMenuButton = document.createElement("button");
    testMenuButton.classList.add("icon-button");
    testMenuButton.setAttribute("id", "menu-button");
    const testMenuImage = document.createElement("img");
    testMenuImage.setAttribute("src", "assets/icons/menu.png");
    testMenuButton.appendChild(testMenuImage);
    sidebarHeader.appendChild(testMenuButton);
}

const addMenuFunctionality = () => {
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", () => {
        const bodyElement = document.querySelector("body");
        const sidebarContainer = document.querySelector(".sidebar-container");
        if (sidebarContainer.style.height === "100vh") {
            // remove menu
            sidebarContainer.style.height = "";
            bodyElement.style.overflow = "";
        } else {
            // display menu
            sidebarContainer.style.height = "100vh";
            bodyElement.style.overflow = "hidden";
        }
    })
}

const removeMenuButton = () => {
    const sidebarHeader = document.querySelector(".sidebar-header");
    const menuButton = document.querySelector("#menu-button");
    sidebarHeader.removeChild(menuButton);
}

// Check if at or below 1150px when page first loads
if (!test.matches) {
    testAddMenuButton();
    addMenuFunctionality();
}