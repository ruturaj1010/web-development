console.log("Hello World");





/*


document.body.childNodes
NodeList(5) [text, div.container, text, script, text]0: text1: div.container2: text3: script4: textlength: 5[[Prototype]]: NodeList
2The remote object could not be resolved to a valid node.

document.body.childNodes[1]
<div class=​"container">​…​</div>​

document.body.childNodes[1].childNodes
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1].childNodes
undefined
cont
NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]
undefined
cont
<div class=​"container">​…​</div>​

cont.firstChild

cont.firstElementChild

cont.lastElementChild

document.body.firstElementChild.children

document.body.firstElementChild.children[3]
<div class=​"box">​Box 4​</div>​
document.body.firstElementChild.children[3].nextElementSibling
<div class=​"box">​Box 5​</div>​
document.body.firstElementChild.children[3].previousElementSibling
<div class=​"box">​Box 3​</div>​

*/