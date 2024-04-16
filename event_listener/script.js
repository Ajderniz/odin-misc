
const coolButton = document.querySelector("#cool-button");

coolButton.addEventListener("click", (evnt) => {
	alert(evnt.target);
	evnt.target.style.background = "blue";
});
