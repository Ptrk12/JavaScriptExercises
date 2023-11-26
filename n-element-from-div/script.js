window.onload = function(){
    const firstDiv = document.getElementById("first-div")
    const secondLi = firstDiv.querySelector("ul :nth-child(2)");
    secondLi.classList.add("blue");
    const newPurpleLi = document.createElement("li");
    newPurpleLi.classList.add("purple");
    newPurpleLi.innerText = "NEW PURPLE ITEM"
    const thirdElement = firstDiv.querySelector("ul :nth-child(3)");
    const ul = firstDiv.getElementsByTagName("ul")[0];
    ul.insertBefore(newPurpleLi,thirdElement)
}

