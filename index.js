//Remove ID main


const element1 = document.getElementById("main");
element1.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion"
document.body.append(newHeader);
