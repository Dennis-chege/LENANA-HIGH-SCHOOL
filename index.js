document.getElementById("hello").addEventListener("click", sayHi);
function sayHi(){
var score=parseInt(prompt("What is your score?"));

if (score>80) {
document.getElementById("para").innerHTML="A";
}
else if (score=>75 && score<=80) {
document.getElementById("para").innerHTML="A-";
}
else if(score=>70 && score<=74) {
document.getElementById("para").innerHTML="B+";
}
else if(score=>65 && score<=69) {
document.getElementById("para").innerHTML="B";
}
else if(score=>60 && score<=64 ) {
document.getElementById("para").innerHTML="B-";
}
else if(score=>55 && score<=59) {
document.getElementById("para").innerHTML="C+";
}
else if(score=>50 && score<=54) {
document.getElementById("para").innerHTML="C";
}
else if(score=>45 && score<=49) {
document.getElementById("para").innerHTML="C-";
}
else if(score=>40 && score<=44) {
document.getElementById("para").innerHTML="D+";
}
else if(score=>35 && score<=39) {
document.getElementById("para").innerHTML="D";
}
else if(score=>30 && score<=34) {
document.getElementById("para").innerHTML="D-";
}
else if(score=>25 && score<=29) {
document.getElementById("para").innerHTML="E";
}
else if(score=>20 && score<=0) {
document.getElementById("para").innerHTML="E";
}
else{
document.getElementById("para").innerHTML="Enter valid Score";
}
}
