// let ele = document.getElementsByClassName("box")

// ele[0].style.backgroundColor = "red"
// ele[1].style.backgroundColor = "orange"
// ele[2].style.backgroundColor = "purple"
// ele[3].style.backgroundColor = "cyan"
// ele[4].style.backgroundColor = "brown"


// ele[0].style.color = "purple"
// ele[1].style.color = "blue"
// ele[2].style.color = "red"
// ele[3].style.color = "yellow"
// ele[4].style.color = "pink"


// second method using loop and query selector

let elem = document.querySelector(".container").children

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);

    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(elem).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})