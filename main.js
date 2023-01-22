let elinput = document.querySelector(".input");
let elbtn = document.querySelector(".btn")
let elborder = document.querySelector(".sriq")
let elborder2 = document.querySelector(".kok")

let lebutton0 = document.querySelector("#buttom0");
let lebutton1 = document.querySelector("#buttom1");
let lebutton2 = document.querySelector("#buttom2");
let lebutton3 = document.querySelector("#buttom3");
let lebutton4 = document.querySelector("#buttom4");
let lebutton5 = document.querySelector("#buttom5");
let lebutton6 = document.querySelector("#buttom6");
let lebutton7 = document.querySelector("#buttom7");
let lebutton8 = document.querySelector("#buttom8");
let lebutton9 = document.querySelector("#buttom9");

elbtn.addEventListener("click", function () {
    let a = elinput.value;
    if (a > 10) {
        elborder.style.border = '1px solid red';
        elborder2.style.border = null;
    } if (a < 10) {
        elborder2.style.border = '1px solid red';
        elborder.style.border = null;
    }
})
lebutton0.addEventListener("click", function () {
    elinput.value = +0;

})
lebutton1.addEventListener("click", function () {
    elinput.value = +1;

})
lebutton2.addEventListener("click", function () {
    elinput.value = +2;

})
lebutton3.addEventListener("click", function () {
    elinput.value = +3;

})
lebutton4.addEventListener("click", function () {
    elinput.value = +4;

})
lebutton5.addEventListener("click", function () {
    elinput.value = +5;

})
lebutton6.addEventListener("click", function () {
    elinput.value = +6;

})
lebutton7.addEventListener("click", function () {
    elinput.value = +7;

})
lebutton8.addEventListener("click", function () {
    elinput.value = +8;

})
lebutton9.addEventListener("click", function () {
    elinput.value = +9;

})