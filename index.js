const Name = document.querySelector("#nameInput");
const Content = document.querySelector("#ContentInput");
const bouton = document.querySelector(".btn");
const listeul = document.querySelector("ul");

bouton.addEventListener("click", (event) => {
  if (Name.value != "" && Content.value != "") {
    var item = document.createElement("li");
    item.setAttribute("class", "list-group-item");
    item.textContent=Name.value + ": " + Content.value+ " ";
    const gar = document.createElement("i");
    gar.setAttribute("class","fa-solid fa-trash");
    item.appendChild(gar);
    gar.addEventListener("click",(event) => {
        item.remove();
    })
    listeul.appendChild(item);
    Name.value = "";
    Content.value = "";
  }
});
