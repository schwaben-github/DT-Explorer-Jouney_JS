var greetUser = document.getElementById("greet-user");

var name = prompt("Enter your name:");
var time = new Date().getHours();
var imgSrcArray = [];

//Check if the user enterd a valid name
if (name != "" && name != "null") {

    //Check if the current hour is below 20 (Day)
    if (time < 20) {
        greetUser.innerHTML = "Good day, <em>" + name + "</em>!";
    }

    else {
        greetUser.innerHTML = "Good night, <em>" + name + "</em>!";
    }

    loadImages(imgSrcArray);
}

//The user didn't entered a valid name
else {
    greetUser.innerHTML = "Refresh and enter your name.";
}

//** Click-Event functions **
//Add new image
function addImg() {
    var newImg = prompt("Enter an image source.\n(http://img.com/img.png)");

    //Check if the user enterd a valid image source
    if (newImg != "" && newImg != null) {
        imgSrcArray.push(newImg);
        loadImages(imgSrcArray);
    }
}

//Remove first image (index = 0)
function removeImg() {
    imgSrcArray.shift();
    loadImages(imgSrcArray);
}

//Remove gallery
function removeGallery() {
    imgSrcArray = [];
    loadImages(imgSrcArray);
}