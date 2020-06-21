<!-- Begin



var showdate		= "yes"		// SHOW THE DATE ON THE PAGE
var datespace		= "7"		// SPACE ABOVE DATE





//Cory's Karate

// YOU DO NOT NEED TO EDIT BELOW THIS LINE


document.write('<img src="/picts/general/spacer.gif" width="10" height="'+datespace+'" alt="image"><br>');


// START DATE SCRIPT
   if (showdate == "yes") {

document.write('<div id="date-location">');
var d=new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
document.write("<span class=\"date-font\"><nobr>" + weekday[d.getDay()] + " ")
document.write(monthname[d.getMonth()] + " ")
document.write(d.getDate() + ", ")
document.write(d.getFullYear())
document.write("</nobr><br></span>")
document.write('</div>');

}


//  End -->