let body = document.getElementById("body");
let head = document.getElementById("header");
let nav = document.getElementById("nav")
let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");
let btn = document.getElementById("main_btn");


function changeBack() {
    body.style.backgroundColor = "rgb(59, 58, 58)";
    body.style.color = "rgb(242, 242, 242)";

    head.style.backgroundColor = "rgb(49, 49, 49)";
    head.style.color = "rgb(242, 242, 242)";

    nav.style.color = "rgb(242, 242, 242"
    nav1.style.color = "rgb(242, 242, 242)";
    nav2.style.color = "rgb(242, 242, 242)";
    nav3.style.color = "rgb(242, 242, 242)";

    btn.style.backgroundColor = "rgb(49, 49, 49)";
    btn.style.color = "white"

}

function rechangeBack() {
    body.style.backgroundColor = "rgb(242, 242, 242)";
    body.style.color = "black";

    head.style.backgroundColor = "rgb(225, 225, 225)";
    head.style.color = "rgb(56, 56, 56)";

    nav.style.color = "rgb(56, 56, 56)"
    nav1.style.color = "white";
    nav2.style.color = "rgb(56, 56, 56)";
    nav3.style.color = "rgb(56, 56, 56)";

    btn.style.backgroundColor = "rgb(49, 49, 49)";
    btn.style.color = "white"
}

