document.getElementById("buttonLogin").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
	document.querySelector(".popup").style.display = "none";
})

document.getElementById("buttonRegister").addEventListener("click", function(){
	document.querySelector(".popup-register").style.display = "flex";
})

document.querySelector(".closeIcon").addEventListener("click", function(){
	document.querySelector(".popup-register").style.display = "none";
})



function myBars() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}