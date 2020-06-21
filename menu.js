<!-- Begin menu ver 3.21vo 2010

// NOTE: If you use a ' add a slash before it like this \'

// USE lowercase FOR ALL OPTIONS ONLY


var showimage1		= "yes"		//  SHOW FIRST SIDEBAR IMAGE
var showimage2		= "no"		//  SHOW SECOND SIDEBAR IMAGE
var showtop		= "yes"		//  SHOW MENU TOP AREA


   if (showtop == "yes") {
document.write('<div id="menutop" style="z-index: 3;" class="printhide">');
document.write('<img src="/picts/general/menu-top-1.jpg" width="168" height="78" class="menutrans"><br>');
document.write('<img src="/picts/general/menu-top-2.jpg" width="168" height="25"><br>');
document.write('</div>');
}

document.write('<div id="menulocation">');
document.write('<table cellpadding="0" cellspacing="0" border="0" class="menuwidth"><tr><td>');

document.write('<ul id="top-nav">');




// START MENU LINKS - EDIT BELOW THIS AREA




document.write('  <li class="menuT"><a href="/index.htm" class="firstmenu">Home</a></li>');

document.write('  <li class="menuT"><a href="/coryskarate.htm">About Us</a>'); 
document.write('    <ul id="sub-nav">');
document.write('      <li><a href="/coryskarate.htm">Cory\'s Karate</a></li>');
document.write('      <li><a href="/CoryFisher.htm">Sensei Cory Fisher</a></li>');
document.write('      <li><a href="/tanrendo.htm">Tan Ren Do Karate</a></li>');
document.write('      <li><a href="/tanrendosensei.htm">A Tan Ren Do Sensei</a></li>');
document.write('      <li><a href="/testimonials.htm">Testimonials</a></li>');
document.write('    </ul>');
document.write('  </li>');



document.write('  <li class="menuT"><a href="/classes.htm">Classes</a>'); 
document.write('    <ul id="sub-nav">');
document.write('      <li><a href="/schedule.shtml">Schedule</a></li>');
document.write('      <li><a href="/calendar.htm">Calendar</a></li>');
document.write('    </ul>');
document.write('  </li>');



document.write('  <li class="menuT"><a href="/news.htm">News</a>'); 
document.write('    <ul id="sub-nav">');
document.write('      <li><a href="/events.htm">Current Events</a></li>');
document.write('      <li><a href="/showcase.htm">Showcase</a></li>');
document.write('     	   <li><a href="/awards_instructors.htm">Yearly Awards &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#9658</a>');
document.write('              <ul id="sub-nav">');
document.write('      			<li><a href="/awards_instructors.htm">Instructor of the Year</a></li>');
document.write('      			<li><a href="/awards_students.htm">Student of the Year</a></li>');
document.write('      			<li><a href="/awards_jrstudents.htm">Beginning<br> Student of the Year</a></li>');
document.write('			  </ul>');
document.write('           </li>');
document.write('    </ul>');
document.write('  </li>');


document.write('  <li class="menuT"><a href="/students.htm">Students</a>'); 
document.write('    <ul id="sub-nav">');
document.write('      <li><a href="/leadershipteam.htm">Leadership Team</a></li>');
document.write('      <li><a href="/upperranks.htm">Upper Ranks</a></li>');
document.write('      <li><a href="/members.htm">Student Resources</a></li>');
document.write('    </ul>');
document.write('  </li>');


document.write('      <li class="menuT"><a href="/members.htm">Members Only</a>');


document.write('  <li class="menuT"><a href="/fun.htm">Fun</a>');
document.write('    <ul id="sub-nav">');
document.write('      <li><a href="/comic.htm">Random Comic</a></li>');
document.write('      <li><a href="/jokes.htm">Jokes</a></li>');
document.write('      <li><a href="/flatterer.htm">Flatterer</a></li>');
document.write('    </ul>');
document.write('  </li>');



document.write('  <li class="menuT"><a href="/site_map.htm">Help &amp; Information</a>');
document.write('    <ul id="sub-nav">');
document.write('      <li><a href="/site_map.htm">Site Map</a></li>');
document.write('      <li><a href="/pricing.htm">Pricing</a></li>');
document.write('      <li><a href="/payments.htm">Payments</a></li>');
document.write('      <li><a href="/privacy.htm">Privacy Policy</a></li>');
document.write('    </ul>');
document.write('  </li>');



document.write('  <li class="menuT"><a href="/contact.htm">Contact</a></li>');




// END LINKS //



document.write('</ul>');
document.write('</td></tr><tr><td align="center" class="lastmenu">');



// START MENU IMAGES


   if (showimage1 == "yes") {
document.write('<a href="index.html"><img src="/picts/general/menu-picture-1.jpg" border="0" class="menuimage-borders"></a><br>');
}

document.write('&nbsp;<br>');

   if (showimage2 == "yes") {
document.write('<a href="index.html"><img src="/picts/general/menu-picture-2.jpg" border="0" class="menuimage-borders"></a><br><br>');
}




document.write('</td></tr></table></div>');








// COPYRIGHT 2010 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE









function IEHoverPseudo() {

	var navItems = document.getElementById("top-nav").getElementsByTagName("li");
	
	for (var i=0; i<navItems.length; i++) {
		if(navItems[i].className == "menuT") {
			navItems[i].onmouseover=function() { this.className += " over"; }
			navItems[i].onmouseout=function() { this.className = "menuT"; }
		}
	}

}
window.onload = IEHoverPseudo;



//  End -->