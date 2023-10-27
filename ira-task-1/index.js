let button = document.getElementById("btn");

button.addEventListener("click", function () { 
    document.body.appendChild(document.createElement("p"));
    let paraTag = document.getElementsByTagName("p")[0];
    paraTag.textContent = "Surprise!! (Just kidding). Hi!! Have a nice day :D";   
})