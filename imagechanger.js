<!-- Begin
// USE lowercase FOR ALL OPTIONS


var flashwC		= "750"		 // WIDTH OF THE FLASH
var flashhC		= "80"		 // HEIGHT OF THE FLASH
var flashColor		= "000000"	 // BACKGROUND COLOR
var flashmode		= "transparent"	 // FLASH WMODE | window | opaque | transparent |
var showflash		= "yes"		 // SHOW FLASH & DETECTION TEST MODE | yes | no |




//Cory's Karate
// FLASH LOGO WITH DETECTION VER 3.0
// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// SHOW THIS IF FLASH SOFTWARE IS NOT DETECTED

var alternateContent = '<img src="flash/image1.jpg" width="'+flashwC+'" height="'+flashhC+'" border="0"><br>';

document.write('<table cellpadding="0" cellspacing="0" border="0" bgcolor="'+flashColor+'" width="'+flashwC+'" height="'+flashhC+'"><tr><td>');
   if (showflash == "yes") {
// Version check based upon the values entered in "FLASH Globals" in javascripts.js
var hasReqestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

// Check to see if the version meets the requirements for playback
if (hasReqestedVersion) {
	// if we've detected an acceptable version
	// embed the Flash Content SWF when all tests are passed

	AC_FL_RunContent(
				"src", "imagechanger.swf",
				"width", flashwC,
				"height", flashhC,
				"align", "middle",
				"id", "imagechanger",
				"quality", "high",
				"wmode", flashmode,
				"bgcolor", "#"+flashColor,
				"name", "imagechanger",
				"allowScriptAccess","sameDomain",
				"type", "application/x-shockwave-flash",
				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
} else {  // flash is too old or we can't detect the plugin
document.write(alternateContent);  // insert non-flash content
}
}
else {
document.write(alternateContent);  // insert non-flash content
}
document.write('</td></tr></table>');
// -->