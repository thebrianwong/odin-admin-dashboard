/* Stated value is 1151px, not 1150px so that the addition of the menu button is
synced up with the responsive CSS changes at 1150px */
const window = window.matchMedia("(min-width: 1151px)")

const addMenuButton = () => {
    const sidebarHeader = document.querySelector(".sidebar-header");
    const menuButton = document.createElement("button");
    menuButton.classList.add("icon-button");
    menuButton.setAttribute("id", "menu-button");
    const testMenuImage = document.createElement("img");
    testMenuImage.setAttribute("src", "assets/icons/menu.png");
    menuButton.appendChild(testMenuImage);
    sidebarHeader.appendChild(menuButton);
}

const addMenuFunctionality = () => {
    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener("click", () => {
        const bodyElement = document.querySelector("body");
        const sidebarContainer = document.querySelector(".sidebar-container");
        if (sidebarContainer.style.height === "100vh") {
            // Hides menu list
            sidebarContainer.style.height = "";
            bodyElement.style.overflow = "";
        } else {
            // Displays menu list
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

// Checks if at or below 1151px when page first loads
if (!window.matches) {
    addMenuButton();
    addMenuFunctionality();
}

window.onchange = (e) => {
    if (e.matches) {
        // When viewport width is larger than 1151px
        removeMenuButton();
    } else {
        // When viewport width is less than or equal to 1151px
        addMenuButton();
        addMenuFunctionality();
    }
}