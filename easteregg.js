
  var num_images_onscreen = 0;
  var keyspushed = 0;
  var random_images_array = ["Alec.gif", "Alexis.gif", "Benji.gif", "Carter.gif", "Charlotte.gif", "CoryFisher.gif", "Elliot.gif", "Gordon.gif", "Hayden.gif", "Henry.gif", "Isaiah.gif", "Jackson.gif", "Jenica.gif", "Josie.gif", "Kai.gif","Jaiden.gif", "Kolby.gif", "Korbin.gif", "Luc.gif", "Matthew.gif", "McKell.gif", "Nic.gif", "Nolan.gif", "Oliver.gif", "Rex.gif", "Richie.gif", "Ryan.gif", "Seth.gif", "Talan.gif", "Tess.gif", "Wesley.gif"]; 
  
   document.onkeydown = function(evt) 
   {
    	evt = evt || window.event;
			switch(keyspushed)
			{
				case 0:
					if (evt.keyCode == 75) keyspushed = 1;
					else keyspushed = 0;
					
					break;
				case 1:
					if (evt.keyCode == 65) keyspushed = 2;
					else keyspushed = 0;
					break;
				case 2:
					if (evt.keyCode == 82) keyspushed = 3;
					else keyspushed = 0;
					break;
				case 3:
					if (evt.keyCode == 65) keyspushed = 4;
					else keyspushed = 0;
					break;
				case 4:
					if (evt.keyCode == 84) keyspushed = 5;
					else keyspushed = 0;
					break;
				case 5:
					if (evt.keyCode == 69) keyspushed = 6;
					else keyspushed = 0;
					break;
				case 6:
					num = Math.floor( Math.random() * random_images_array.length );
    				image = random_images_array[ num ];
//				alert(image);
											
					if (evt.keyCode == 27)
						keyspushed = 0;
					else
					{			
						switch(num_images_onscreen)
						{
							case 0:
								document.getElementById("myDiv1").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=20><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 1:
								document.getElementById("myDiv2").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=14><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 2:
								document.getElementById("myDiv3").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=6><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 3:
								document.getElementById("myDiv4").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=8><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 4:
								document.getElementById("myDiv5").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=18><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 5:
								document.getElementById("myDiv6").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=12><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 6:
								document.getElementById("myDiv7").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=4><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 7:
								document.getElementById("myDiv8").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=16><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 8:
								document.getElementById("myDiv9").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=10><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								break;	
							case 9:
								document.getElementById("myDiv10").innerHTML="<marquee behavior=\"scroll\" direction=\"left\" loop=1 scrollamount=2><img src=\"picts/easteregg/" + image + "\" alt=\"Swimming fish\"></marquee>";
								num_images_onscreen = -1;
								break;	
							
						}
						num_images_onscreen += 1;
						
					}
						
					break;
			}
			
	}
	