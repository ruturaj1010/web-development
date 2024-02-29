console.log(document.querySelector(".box").innerHTML)

// document.querySelector(".container").innerHTML
// document.querySelector(".container").innerText
// document.querySelector(".container").outerHTML
// document.querySelector(".container").tagName

// document.querySelector(".box").hasAttribute("style")
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style","display:inline")

// let div = document.createElement("div")
// div.innerHTML = "I have been inserted in body <b>by Ruturaj</b>"
// div.setAttribute("class", "created")
// document.querySelector(".container").append(div)


let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin" , "<h1>I am inserted using adjacentHTML</h1>")