var gallery = document.getElementById("gallery");

//Render images to the page
function loadImages(imgSrcArray) {
    //Reset gallery
    gallery.innerHTML = "";

    //Iterate through each item in the array
    for (i = 0; i < imgSrcArray.length; i++) {
        gallery.innerHTML += "<img src='" + imgSrcArray[i] + "'>";
    }

    //Check if no images have been rendered to the page (imgSrcArray is empty)
    if (gallery.innerHTML == "") {
        gallery.innerHTML = "<h2>Add your Favorite Images!</h2>";
    }
}