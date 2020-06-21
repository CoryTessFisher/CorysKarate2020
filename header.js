<!-- Begin LOGO OPTIONS
// USE lowercase FOR ALL OPTIONS


var flashw		= "750"		 // WIDTH OF THE FLASH LOGO
var flashh		= "85"		 // HEIGHT OF THE FLASH LOGO
var flashCol		= "000000"	 // LOGO BACKGROUND COLOR
var flashmode		= "opaque"	 // FLASH WMODE | window | opaque | transparent |
var logoalign		= "left"	 // ALIGN LOGO
var logoalign2		= "right"
var stripes	 	= "yes"		 // SHOW STRIPE UNDER THE FLASH (Adjust menu.css also)


// FLASH DETECTION OPTIONS

var LogoText		= "Cory's Karate"	    // TEXT FOR NON-FLASH BROWSERS
var textmargin		= "10"		    // LEFT/RIGHT MARGIN FOR TEXT LOGO
var showflash		= "yes"		    // SHOW FLASH LOGO & DETECTION TEST MODE | yes | no |
var logotype		= "graphic"	    // DETECTION TO SHOW - | text | graphic |
var logoimg		= "/picts/general/logo.jpg"  // GRAPHIC LOGO
var logoimg2	= "/picts/general/logo_IMAA.jpg" //IMAA LOGO





//Cory's Karate
// FLASH LOGO WITH DETECTION VER 3.0
// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// SHOW THIS IF FLASH SOFTWARE IS NOT DETECTED

if (logotype == "graphic") {
var alternateContent = '<img src="'+logoimg+'" border="0"><br>';
}
if (logotype == "text") {
var alternateContent = '<div OnSelectStart=\'return false;\' style="margin-left:'+textmargin+'px;margin-right:'+textmargin+'px;"><nobr><span class="NoFlashTitle">&nbsp;'+LogoText+'</span></nobr></div>';
}
document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#'+flashCol+'"><tr valign="bottom"><td height="'+flashh+'" valign="middle" align="'+logoalign+'">');
   if (showflash == "yes") {
// Version check based upon the values entered in "FLASH Globals" in javascripts.js
var hasReqestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

// Check to see if the version meets the requirements for playback
if (hasReqestedVersion) {
	// if we've detected an acceptable version
	// embed the Flash Content SWF when all tests are passed

	AC_FL_RunContent(
				"src", "logo.swf",
				"width", flashw,
				"height", flashh,
				"align", "middle",
				"id", "logo",
				"quality", "high",
				"wmode", flashmode,
				"bgcolor", "#"+flashCol,
				"name", "logo",
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
document.write('</td>');
document.write('<td align="'+logoalign2+'"><a href="http://www.intermountainmartialartsalliance.com"><img src="'+logoimg2+'" border="0"></a></td></tr></table>');
   if (stripes == "yes") {
document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" class="printhide"><tr><td class="pagebars">');
document.write('<img src="picts/spacer.gif" width="10" height="1" alt="image"><br>');
document.write('</td></tr></table>');
			}
// -->