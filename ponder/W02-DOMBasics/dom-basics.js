// Access HTML in JS, use the documnet object
// CSS selectors in JS are the same as in CSS to find HTML elements
let firstList = document.querySelector(".list");
firstList.style.backgroundColor = "red";

let content = document.getElementById("content");
content.style.backgroundColor = "lightblue";

document.querySelector("img").setAttribute("src", "https://placeimg.dev/350x197?gradient=FF5733,4F46E5&text=Place Holder IMG");
document.querySelector("img").setAttribute("alt", "new alt tag");

document.querySelector("h1").textContent = "DOM Basics";

document.getElementById("content").style.color = "darkblue";
document.getElementsByTagName("h1")[0].style.color  = "darkred";

console.log(document.getElementById("content").textContent);