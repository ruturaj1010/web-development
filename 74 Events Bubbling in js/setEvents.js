let button  = document.getElementById("btn")

button.addEventListener("dblclick" , ()=>{
    document.querySelector(".box").innerHTML = "<b>The user has clicked on me</b> yayyy !"
})

button.addEventListener("contextmenu" , ()=>{
    alert("Don't right click please!")
})

document.addEventListener("keydown" , (e)=>{
    console.log(e.key , e.keyCode)
})