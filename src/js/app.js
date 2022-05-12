import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {

	document.querySelector("img").setAttribute("src", "https://picsum.photos/200/300")
	document.querySelector(".image").addEventListener("click", clicked) 
	function clicked(){
		document.querySelector(".image").style = "transform: scale(2)"
	}

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
