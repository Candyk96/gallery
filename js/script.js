var imageSource;
var current;

// function to show large image when clicked on a image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
    const srcArray = imageSrc.split(".");
    let srcStr = srcArray[0];
    current = Number(srcStr.substring(38));
    if (current == 1) {
      document.getElementById("left_arrow").style.visibility = "hidden";
    }
    else {
      document.getElementById("left_arrow").style.visibility = "visible";
    }
    if (current == 174) { // value depends on how many images are in total
      document.getElementById("right_arrow").style.visibility = "hidden";
    }
    else {
      document.getElementById("right_arrow").style.visibility = "visible";
    }
     
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  // function to hide the image when clicked on cross button
  function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
   document.body.style.overflow = "auto";
  }

// function to choose previous or next image
function moveImage(direction) {
  if (direction == "left") {
    current = current - 1;
    loadImage(current);
  } 
  if (direction == "right") {
    current = current + 1;
    loadImage(current);
  }  
}

// function to show previous or next image
function loadImage(current) {
  let popupImage = document.getElementById("popupImage");
  popupImage.setAttribute('src', 'images/image'+current+'.jpg');
  if (current == 1) {
    document.getElementById("left_arrow").style.visibility = "hidden";
  }
  else {
    document.getElementById("left_arrow").style.visibility = "visible";
  }
  if (current == 174) {
    document.getElementById("right_arrow").style.visibility = "hidden";
  }
  else {
    document.getElementById("right_arrow").style.visibility = "visible";
  }
     
  let imagePopup = document.getElementById("imagePopup");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
 /*var image = document.getElementById("popupImage").src;
 image.setAttribute( 'src', 'images/image'+id+'.jpg');*/
}
  