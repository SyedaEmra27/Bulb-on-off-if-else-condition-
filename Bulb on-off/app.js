
/*function on() {
    var imgElement = document.getElementById ("img");
    imgElement.src="on.jpg"
    
}
function off() {
    var imgElement = document.getElementById("img");
    imgElement.src = "off.jpg"
} */
function combine() {
    var btnElement = document.getElementById("btn");
    var imgElement = document.getElementById("img");
    if (btnElement.innerHTML === "Off") {
        imgElement.src ="https://i0.wp.com/www.billfrymire.com/gallery/weblarge/incandescent-lightbulb-glow.jpg?resize=667%2C1000";
        btnElement.innerHTML ="On";
        
    } else {
        imgElement.src ="https://tse2.mm.bing.net/th?id=OIP.5xXsOwxrHEdejEjOb7eAlgHaMk&pid=Api&P=0&h=220";
        btnElement.innerHTML ="Off";
        
    }
    
}