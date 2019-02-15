function ini(a){
    document.getElementById(a).style.background = "rgba(255, 255, 255, .03)";
    document.getElementById(a).style.boxShadow = "1px 1px 10px #fff";
    document.getElementById(a+'-pill').style.borderRight = "25px solid #e75480";
    document.getElementById(a+'-pill').style.transitionDuration = "400ms";
    document.getElementById(a+'-text').style.color = "#e75480";
}
function fin(a){
    document.getElementById(a).style.background = "";
    document.getElementById(a).style.boxShadow = "0px 0px #fff";
    document.getElementById(a+'-pill').style.borderRight = "25px solid #fff";
    document.getElementById(a+'-pill').style.transitionDuration = "400ms";
}