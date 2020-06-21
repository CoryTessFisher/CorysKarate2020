<!-- START

if (document.images) {


nexton = new Image();
nexton.src = "picts/general/gallery-next-on.gif"

nextoff = new Image();
nextoff.src = "picts/general/gallery-next-off.gif"

backon = new Image();
backon.src = "picts/general/gallery-back-on.gif"

backoff = new Image();
backoff.src = "picts/general/gallery-back-off.gif"

homeon = new Image();
homeon.src = "picts/general/gallery-home-on.gif"

homeoff = new Image();
homeoff.src = "picts/general/gallery-home-off.gif"


}

function img_act(imgName) {
if (document.images) {
imgOn = eval(imgName + "on.src");
document [imgName].src = imgOn;
}
}

function img_inact(imgName) {
if (document.images) {
imgOff = eval(imgName + "off.src");
document [imgName].src = imgOff;
}
}

// -->