function sayHi() {
    var score = parseInt(prompt("What is your score?"));

    if (isNaN(score) || score < 0 || score > 100) {
        document.getElementById("para").innerHTML = "Enter valid Score";
    } else if (score > 80) {
        document.getElementById("para").innerHTML = "A";
    } else if (score >= 75) {
        document.getElementById("para").innerHTML = "A-";
    } else if (score >= 70) {
        document.getElementById("para").innerHTML = "B+";
    } else if (score >= 65) {
        document.getElementById("para").innerHTML = "B";
    } else if (score >= 60) {
        document.getElementById("para").innerHTML = "B-";
    } else if (score >= 55) {
        document.getElementById("para").innerHTML = "C+";
    } else if (score >= 50) {
        document.getElementById("para").innerHTML = "C";
    } else if (score >= 45) {
        document.getElementById("para").innerHTML = "C-";
    } else if (score >= 40) {
        document.getElementById("para").innerHTML = "D+";
    } else if (score >= 35) {
        document.getElementById("para").innerHTML = "D";
    } else if (score >= 30) {
        document.getElementById("para").innerHTML = "D-";
    } else {
        document.getElementById("para").innerHTML = "E";
    }
}
