var pl1 = Math.floor(Math.random() * 6) + 1;
var pl2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + pl1 + ".png";
var randomImage2 = "dice" + pl2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", "Images/" + randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", "Images/" + randomImage2);

if(pl1 > pl2){
    document.querySelector("h1").innerHTML = "Player 1 Wins ! 🚩🎉";
}
else if(pl1 == pl2){
    document.querySelector("h1").innerHTML = "Match Drawn ! 🚩🎉";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins ! 🚩🎉";
}
