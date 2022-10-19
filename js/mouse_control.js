var bubActive = false;
var timeout = 1500;
var timer;

var bubs = ["content/bubs/bub1.png","content/bubs/bub2.png","content/bubs/bub3.png","content/bubs/bub4.png"];

function onMouseOver () {
  document.getElementById("profile_picture").src = "content/alex_profile_alt.jpg";
  if (bubActive){
    showBub();
  } else {
    timer = setTimeout(countDown,timeout);
  }
}

function onMouseOut (){
  document.getElementById("profile_picture").src = "content/alex_profile.jpg";
  clearTimeout(timer);
  hideBub();
}

function countDown(){
  //alert("DONG!");
  bubActive = true;
  showBub();
}

function showBub(){
  let rand = Math.floor(Math.random() * bubs.length);
  let bub = document.getElementById("bub");
  //console.log(rand);
  //console.log(bubs[rand]);
  bub.src = bubs[rand];
  bub.style.visibility = "visible";
}

function hideBub(){
  let bub = document.getElementById("bub");
  bub.style.visibility = "hidden";
}
