// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
// document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!";
// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!";
// } else if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").innerHTML = "Draw!";
// }

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randumImageSource = "images/" + randomDiceImage; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randumImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randumImageSource2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randumImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
