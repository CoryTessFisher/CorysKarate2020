window.onload = choosePic;

var myPix = new Array("picts/Comics/comic10.jpg","picts/Comics/comic100.jpg","picts/Comics/comic101.jpg");


function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];

