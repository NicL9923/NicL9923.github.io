let updateTime = () => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"];

    if (minutes < 10)
        minutes = "0" + minutes;
    if (seconds < 10)
        seconds = "0" + seconds;

    month = monthNames[month];

    let timeString = hours + ":" + minutes + ":" + seconds;
    let dateString = month + " " + day + ", " + year;

    document.getElementById("headerDate").innerHTML = dateString;
    document.getElementById("headerTime").innerHTML = timeString;
}

setInterval(updateTime, 1000);