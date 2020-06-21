<!-- Begin POP-UP SIZES AND OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS


// GALLERY VIEWER OPTIONS

var viewer 		= "same"	// OPTIONS: | new | popup | same | New browser or a popup
var width 		= "800"		// WIDTH OF THE POPUP
var height 		= "625"		// HEIGHT OF THE POPUP
var scrollbars		= "yes"		// SHOW SCROLLBARS IN POPUP - yes OR no
var menu		= "yes"		// SHOW MENU IN POPUP - yes OR no
var tool		= "yes"		// SHOW TOOLBAR IN POPUP - yes OR no


// VIDEO POPUP OPTIONS

var video_width		= "766"		// VIDEO POPUP WIDTH
var video_height	= "400"		// VIDEO POPUP HEIGHT
var scrollbar_video	= "no"		// VIDEO POPUP SCROLLBARS
var menu_video		= "yes"		// SHOW MENU IN MESSAGE POPUP
var wX_location		= "350"		// VIDEO POPUP HORIZONTAL LOCATION
var wY_location		= "0"		// VIDEO POPUP VERTICAL LOCATION
var video_viewer 	= "popup"	// VIDEO BROWSER OR POPUP | popup | new |










//Cory's Karate

// YOU DO NOT NEED TO EDIT BELOW THIS LINE






// START IMAGE VIEW CODE

function ViewImage(data) {
   if (viewer == "popup") {
    windowHandle = window.open('image-viewer.htm' + '?' + data,'windowName',',scrollbars='+scrollbars+',resizable=yes,toolbar='+tool+',menubar='+menu+',width='+width+',height='+height+'');

}
else if (viewer == "new") {
    windowHandle = window.open('image-viewer.htm' + '?' + data,'windowName');
}
else if (viewer == "same") {
    window.location = ('image-viewer.htm' + '?' + data);
}
}

// END IMAGE VIEW CODE






// VIDEO POPUP CODE


function VideoOpen(URL) {

day = new Date();
id = 'messagepopup';
   if (video_viewer == "popup") {
eval("page" + id + " = window.open(URL, '" + id + "', 'scrollbars='+scrollbar_video+',toolbar=no,resizable=yes,directories=no,menubar='+menu_video+',location=no,status=no,left='+wX_location+',top='+wY_location+',width=' + video_width + ',height=' + video_height + '');");
}
else 
if (video_viewer == "new") {
eval("page" + id + " = window.open(URL);");
}
}







// End -->