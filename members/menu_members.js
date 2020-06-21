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


document.write('  <li class="menuT"><a href="/members/membersonly.htm" class="firstmenu">Member\'s Home</a></li>');


document.write('  <li class="menuT"><a href="/members/resources.htm">Student Resources</a>');
document.write('    <ul id="sub-nav">');
document.write('          <li><a href="/members/terminology_members.htm">Terminology</a></li>');
document.write('          <li><a href="/members/uniform_members.htm">The Uniform</a></li>');
document.write('          <li><a href="/members/japanesenumbers_members.htm">Japanese Numbers</a></li>');
document.write('          <li><a href="/members/requirements_members.htm">Requirements</a></li>');
document.write('          <li><a href="/members/jr_requirements_members.htm">Jr Dragons Requirements</a></li>');
document.write('          <li><a href="/members/ranktesting_members.htm">Rank Testing</a></li>');
document.write('    </ul>');
document.write('  </li>');


document.write('  <li class="menuT"><a href="/members/defenses.htm">Defenses</a>');
document.write('  <li class="menuT"><a href="/members/kicks.htm">Kicks</a>');

//document.write('  <li class="menuT"><a href="forms.htm">Defenses</a>');
//document.write('      <ul id="sub-nav">');
//document.write('     	   <li><a href=".htm">Text Version</a></li>');
//document.write('     	   <li><a href=".htm">Images</a>');
//document.write('              <ul id="sub-nav">');
//document.write('            	   <li><a href="KibonI.pdf">Kibon I</a></li>');
//document.write('            	   <li><a href="KibonII.pdf">Kibon II</a></li>');
//document.write('            	   <li><a href="KibonIII.pdf">Kibon III</a></li>');
//document.write('            	   <li><a href="KibonIV.pdf">Kibon IV</a></li>');
//document.write('            	   <li><a href="AdvancedIII.pdf">Advanced III</a></li>');
//document.write('            	   <li><a href="Cho-San.pdf">Cho-San</a></li>');
//document.write('              </ul>');
//document.write('           </li>');
//document.write('     </ul>');
//document.write('  </li>');



document.write('  <li class="menuT"><a href="/members/Forms/forms_beginner.htm">Forms: Beginner</a>');
document.write('      <ul id="sub-nav">');
document.write('     	   <li><a href="/members/Forms/forms_beginner.htm">Quick Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/beginner/Quick_KibonI.htm">Kibon I</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Quick_KibonIII.htm">Kibon III</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Quick_KibonII.htm">Kibon II</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Quick_KibonIV.htm">Kibon IV</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Quick_AdvancedI.htm">Advanced I</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Quick_Cho-Sang.htm">Cho-Sang</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_beginner.htm">Detailed Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/beginner/Detail_KibonI.htm">Kibon I</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Detail_KibonIII.htm">Kibon III</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Detail_KibonII.htm">Kibon II</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Detail_KibonIV.htm">Kibon IV</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Detail_AdvancedII.htm">Advanced I</a></li>');
document.write('            	   <li><a href="/members/Forms/beginner/Detail_ChoSang.htm">Cho-Sang</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_beginner.htm">Videos</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Videos/beginner/KibonI.htm">Kibon I</a></li>');
document.write('            	   <li><a href="/members/Videos/beginner/KibonIII.htm">Kibon III</a></li>');
document.write('            	   <li><a href="/members/Videos/beginner/KibonII.htm">Kibon II</a></li>');
document.write('            	   <li><a href="/members/Videos/beginner/KibonIV.htm">Kibon IV</a></li>');
document.write('            	   <li><a href="/members/Videos/beginner/AdvancedI.htm">Advanced I</a></li>');
document.write('            	   <li><a href="/members/Videos/beginner/ChoSang.htm">Cho-Sang</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     </ul>');
document.write('  </li>');




document.write('  <li class="menuT"><a href="/members/Forms/forms_intermediate.htm">Forms: Intermediate</a>');
document.write('      <ul id="sub-nav">');
document.write('     	   <li><a href="/members/Forms/forms_intermediate.htm">Quick Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_RoHai.htm">Ro-Hai I</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_RoHaiII.htm">Ro-Hai II</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_AdvancedII.htm">Advanced II</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_AdvancedIII.htm">Advanced III</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_AdvancedIV.htm">Advanced IV</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_GhulGee.htm">Ghul Gee</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Quick_DonGuan.htm">Don Guan</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_intermediate.htm">Detailed Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/Intermediate/Detail_RoHai.htm">Ro-Hai I</a></li>');
document.write('            	   <li><a href="/members/Forms/intermediate/Detail_RoHaiII.htm">Ro-Hai II</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Detail_AdvancedII.htm">Advanced II</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Detail_AdvancedIII.htm">Advanced III</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Detail_AdvancedIV.htm">Advanced IV</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Detail_Tekki-Shodan.htm">Tekki-Shodan</a></li>');
document.write('            	   <li><a href="/members/Forms/Intermediate/Detail_DonGuan.htm">Don Guan</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_intermediate.htm">Videos</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Videos/intermediate/RoHai.htm">Ro-Hai I</a></li>');
document.write('            	   <li><a href="/members/Videos/intermediate/RoHaiII.htm">Ro-Hai II</a></li>');
document.write('            	   <li><a href="/members/Videos/intermediate/AdvancedII.htm">Advanced II</a></li>');
document.write('            	   <li><a href="/members/Videos/intermediate/AdvancedIII.htm">Advanced III</a></li>');
document.write('            	   <li><a href="/members/Videos/intermediate/AdvancedIV.htm">Advanced IV</a></li>');
document.write('            	   <li><a href="/members/Videos/intermediate/Tekki-Shodan.htm">Tekki-Shodan</a></li>');
document.write('            	   <li><a href="/members/Videos/intermediate/DonGuan.htm">Don Guan</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     </ul>');
document.write('  </li>');


document.write('  <li class="menuT"><a href="/members/Forms/forms_advanced.htm">Forms: Advanced</a>');
document.write('      <ul id="sub-nav">');
document.write('     	   <li><a href="/members/Forms/forms_advanced.htm">Quick Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/advanced/Quick_Koryo.htm">Koryo</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Quick_Ronin.htm">Ron\'in</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Quick_Bassai.htm">Bassai</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Quick_ChoongMu.htm">Choong Mu</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/AdvancedV.htm">Advanced V</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/KanKu-Dai.htm">Kanku Dai</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_advanced.htm">Detailed Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_Koryo.htm">Koryo</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_Ronin.htm">Ron\'in</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_Bassai.htm">Bassai</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_ChoongMu.htm">Choong Mu</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_AdvancedV.htm">Advanced V</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_Kanku-Dai.htm">Kanku Dai</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_advanced.htm">Videos</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Videos/advanced/Koryo.htm">Koryo</a></li>');
document.write('            	   <li><a href="/members/Videos/advanced/Ronin.htm">Ron\'in</a></li>');
document.write('            	   <li><a href="/members/Videos/advanced/Bassai.htm">Bassai</a></li>');
document.write('            	   <li><a href="/members/Videos/advanced/ChoongMu.htm">Choong Mu</a></li>');
document.write('            	   <li><a href="/members/Videos/advanced/AdvancedV.htm">Advanced V</a></li>');
document.write('            	   <li><a href="/members/Videos/advanced/KanKu-Dai.htm">Kanku Dai</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     </ul>');
document.write('  </li>');


document.write('  <li class="menuT"><a href="/members/Forms/forms_blackbelt.htm">Forms: Black Belt</a>');
document.write('      <ul id="sub-nav">');
document.write('     	   <li><a href="/members/Forms/forms_blackbelt.htm">Quick Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/advanced/Quick_ShinKataI.htm">Shin Kata I</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Quick_ShinKataII.htm">Shin Kata II</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Quick_ShindoShodan.htm">Shindo Shodan</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Quick_Unso.htm">Unso</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Quick_YoShin.htm">Yo-Shin</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Quick_PyongWon.htm">Pyong Won</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Quick_StickyFingers.htm">Sticky Fingers</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_blackbelt.htm">Detailed Versons</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_ShinKataI.htm">Shin Kata I</a></li>');
document.write('            	   <li><a href="/members/Forms/advanced/Detail_ShinKataII.htm">Shin Kata II</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Detail_ShindoShodan.htm">Shindo Shodan</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Detail_Unsu.htm">Unso</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Detail_YoShin.htm">Yo-Shin</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Detail_PyongWon.htm">Pyong Won</a></li>');
document.write('            	   <li><a href="/members/Forms/black/Detail_StickyFingers.htm">Sticky Fingers</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="/members/Forms/forms_blackbelt.htm">Videos</a>');
document.write('              <ul id="sub-nav">');
document.write('            	   <li><a href="/members/Videos/advanced/ShinKataI.htm">Shin Kata I</a></li>');
document.write('            	   <li><a href="/members/Videos/advanced/ShinKataII.htm">Shin Kata II</a></li>');
document.write('            	   <li><a href="/members/Videos/black/ShindoShodan.htm">Shindo Shodan</a></li>');
document.write('            	   <li><a href="/members/Videos/black/Unso.htm">Unso</a></li>');
document.write('            	   <li><a href="/members/Videos/black/YoShin.htm">Yo-Shin</a></li>');
document.write('            	   <li><a href="/members/Videos/black/PyongWon.htm">Pyong Won</a></li>');
document.write('            	   <li><a href="/members/Videos/black/StickyFingers.htm">Sticky Fingers</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     </ul>');
document.write('  </li>');

document.write('  <li class="menuT"><a href="/members/Forms/forms_weapons.htm">Weapons</a>');

document.write('  <li class="menuT"><a href="/members/Videos/fun_videos.htm">Fun Videos</a></li>');

document.write('  <li class="menuT"><a href="/payments.htm">Payments</a></li>');

//document.write('  <li class="menuT"><a href="http://www.coryskarate.com/downloads/2016SpringTournamentEntryForm.pdf">Download Tournament Form</a></li>');

//document.write('  <li class="menuT"><a href="http://www.coryskarate.com/downloads/TShirtOrderForm.pdf">T-Shirt Order Form</a></li>');



document.write('  <li class="menuT"><a href="/members/downloads.htm">Downloads</a>');
document.write('    <ul id="sub-nav">');
document.write('     	   <li><a href="/members/trainingschedules.htm">Training Schedules</a>');
document.write('              <ul id="sub-nav">');
document.write('          			<li><a href="http://www.coryskarate.com/downloads/YellowStripeTrainingSchedule.pdf">Yellow Stripe</a></li>');
document.write('          			<li><a href="http://www.coryskarate.com/downloads/YellowBeltTrainingSchedule.pdf">Yellow Belt</a></li>');
document.write('          			<li><a href="http://www.coryskarate.com/downloads/GoldBeltTrainingSchedule.pdf">Gold Belt</a></li>');
document.write('       			   <li><a href="http://www.coryskarate.com/downloads/OrangeBeltTrainingSchedule.pdf">Orange Belt</a></li>');
document.write('       			   <li><a href="http://www.coryskarate.com/downloads/GreenBeltTrainingSchedule.pdf">Green Belt</a></li>');
document.write('       			   <li><a href="http://www.coryskarate.com/downloads/BlueBeltTrainingSchedule.pdf">Blue Belt</a></li>');
document.write('      			   <li><a href="http://www.coryskarate.com/downloads/PurpleBeltTrainingSchedule.pdf">Purple Belt</a></li>');
document.write('    			   <li><a href="http://www.coryskarate.com/downloads/BrownBeltTrainingSchedule.pdf">Brown Belt</a></li>');
document.write('     			   <li><a href="http://www.coryskarate.com/downloads/RedStripeBeltTrainingSchedule.pdf">Red Stripe</a></li>');
document.write('      			   <li><a href="http://www.coryskarate.com/downloads/RedBeltTrainingSchedule.pdf">Red Belt</a></li>');
document.write('      			   <li><a href="http://www.coryskarate.com/downloads/BlackBeltTrainingSchedule.pdf">Black Belt</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     	   <li><a href="blackbeltapplications.htm">Black Belt Applications</a>');
document.write('              <ul id="sub-nav">');
document.write('          			<li><a href="http://www.coryskarate.com/downloads/bbapplication2017.pdf">1st Degree</a></li>');
document.write('          			<li><a href="http://www.coryskarate.com/downloads/bbapplication2017_2ndDegree.pdf">2nd Degree</a></li>');
document.write('          			<li><a href="http://www.coryskarate.com/downloads/bbapplication2017_3rdDegree.pdf">3rd Degree</a></li>');
document.write('              </ul>');
document.write('           </li>');
document.write('     </ul>');
document.write('  </li>');


document.write('  <li class="menuT"><a href="/members/contact_members.htm">Contact</a></li>');




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