// Interactivity with Javascript - Week2 Assignment - Interactive Photo Gallery by Marek Kovar
// Name this external file gallery.js and place it in folder js
// Complete tree shall look like this:
// ./css/gallery.css
// ./js/gallery.js
// ./gallery.html

function upDate(previewPic){
  var mybox = document.getElementById('image');  
  mybox.innerHTML = "<h2>" + previewPic.alt + "</h2>";
  mybox.style.backgroundColor = "#bf9000";
  mybox.style.backgroundImage = "url('"+previewPic.src +"')"; 
  }
function unDo(){
  var mybx = document.getElementById('image');  
  mybx.innerHTML = "Hover over an image below to display here.";
  mybx.style.backgroundColor = "#8e68ff";
  mybx.style.backgroundImage = "url('')"; 
	}