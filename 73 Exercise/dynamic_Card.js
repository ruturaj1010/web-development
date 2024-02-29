function createCard ( title, cName, views, monthsOld, duration, thumbnail ) {
    let viewsstr
    if ( views > 1000000 ) {
        viewsstr = views / 1000000 + "M"
    } else if(views < 1000){
        viewsstr = views
    } else {
        viewsstr = views / 1000 + "K"
    }

    let html = `<div class="card">
        <div class="imag">
            <img src= "${thumbnail}" alt="this is an img">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <p><b>${title}</b></p>
            <span>${cName} . ${viewsstr} views . ${monthsOld} months ago</span>
        </div>
    </div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard( "Introduction to Backend | Sigma webdevelopment video #2", "CodeWithHarry", 560000, 7, "31.22", "../attachments/wallpaper.jpg" )

createCard( "Introduction to Node.js | Sigma webdevelopment video #3", "CodeWithHarry", 5000000, 4, "27.10", "../attachments/wallpaper.jpg" )