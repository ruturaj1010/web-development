console.log("Hello")


// selection of class

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"



// selection of Id

// document.getElementById("red").style.backgroundColor = "red";


// selection of Query
// selects first element
document.querySelector(".box").style.backgroundColor = "orange"

// selectsAll
document.querySelectorAll(".box").forEach( e => {
    e.style.backgroundColor = "yellow"
})