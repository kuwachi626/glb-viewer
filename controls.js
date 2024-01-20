const ctlL = document.getElementById("ctlL");
const ctlR = document.getElementById("ctlR");
const txt = document.getElementById("txt");

//Trigger Pressed
ctlL.addEventListener('triggerdown', function (event) {
    txt.setAttribute("value", "Left trigger down");
});
ctlR.addEventListener('triggerdown', function (event) {
    txt.setAttribute("value", "Right trigger down");
});
//Trigger Released
ctlL.addEventListener('triggerup', function (event) {
    txt.setAttribute("value", "Left trigger up");
});
ctlR.addEventListener('triggerup', function (event) {
    txt.setAttribute("value", "Right trigger up");
});