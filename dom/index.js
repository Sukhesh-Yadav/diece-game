var n=Math.floor(Math.random()*6)+1;
var randomimage1="images/dice"+n+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimage1);

var m= Math.floor(Math.random()*6)+1;
var randomimage2 = "images/dice" +m+ ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if(n>m){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if(n<m){
  document.querySelector("h1").innerHTML="Player2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
