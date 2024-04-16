
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Y AM RED";
redParagraph.style.color = "red";
content.appendChild(redParagraph);

const blueHeaderThree = document.createElement("h3");
blueHeaderThree.textContent = "Y AM BLU HEDER THREE";
blueHeaderThree.style.color = "blue";
content.appendChild(blueHeaderThree);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("id", "pink-div");
pinkDiv.style.backgroundColor = "pink";

const headerOneDiv = document.createElement("h1");
headerOneDiv.textContent = "Y AM A DIV";
pinkDiv.appendChild(headerOneDiv);

const paragraphDiv = document.createElement("p");
paragraphDiv.textContent = "MEE TOO";
pinkDiv.appendChild(paragraphDiv);

content.appendChild(pinkDiv);

container.appendChild(content);
