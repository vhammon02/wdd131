let selectElement = document.querySelector("select");
let logo = document.querySelector(".logo");
let highlight = document.querySelector("h3");

selectElement.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElement.value;
    if (current === "light") {
        document.body.style.backgroundColor  = "white";
        document.body.style.color = "black";
        highlight.style.color = "#218acc";
        logo.setAttribute("src", "images/byui-logo-blue.webp");
    } 
    else if (current === "dark") {
            document.body.style.backgroundColor  = "#333";
            highlight.style.color = "#92c5e6";
            document.body.style.color = "white";
            logo.setAttribute("src", "images/byui-logo-white.png");

    }
    else {
        document.body.style.backgroundColor  = "";
        highlight.style.color = "#218acc";
    }
}
