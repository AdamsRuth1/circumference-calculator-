const pi = 3.1415;
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("myradius").value
    radius = Number(radius);
    circumference = 2 * pi * radius
    document.getElementById("text").innerHTML = "The Circumference is " + circumference
}
