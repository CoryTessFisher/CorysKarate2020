//Copyright Cory's Karate LLC 2020, All Rights Reserved

/* - - - - - - - - - - Variables! - - - - - - - - - - */

//Objects taken from the html page
var eventText = document.getElementById("eventText");

//Data that will be placed in the html Page
var calendarData = [];

//Data that is hidden in the dark depths of this script
var month = 0;
var year = 0;




/* - - - - - - - - - - Stuff that runs when this script loads - - - - - - - - - - */

//Adds listner to know when the page has finished loading
window.addEventListener("load", pageFullyLoaded, false);

//Sets the month and year variables to the current month and year
SetCurrentMonthAndYear();

/* - - - - - - - - - - Thing that i wanted to put here for readability - - - - - - - - - - */

//Runs when the page has finished loading
function pageFullyLoaded(e) 
{
    LoadCalendarArray();
}


/* - - - - - - - - - - High Level Functions - - - - - - - - - - */



/* - - - - - - - - - - Functions that handle the date - - - - - - - - - - */

function SetCurrentMonthAndYear()
{
	var dateObject = new Date();
	month = dateObject.getMonth() + 1;
	year = dateObject.getFullYear();
	dateObject.setHours(23);
	dateObject.setMinutes(59);
	dateObject.setSeconds(59);
	dateObject.setMilliseconds(999);
}


/* - - - - - - - - - - Functions that indirectly modify the HTML - - - - - - - - - - */

//Populates the calendar with the data from google calendars
function PopulateCalendarData()
{
	for (var i = 0; i < calendarData.items.length; i++) 
	{
		if (calendarData.items[i].summary !== undefined) 
		{
			if (calendarData.items[i].description !== undefined) 
			{
				CreateEventText(calendarData.items[i].description.split("<br>"));
			}
		}
	}
}



/* - - - - - - - - - - Functions that directly modify the HTML - - - - - - - - - - */

//Makes a line of text in the header of the calendar
function CreateEventText(text)
{
	if (Array.isArray(text))
	{
		var arrayLength = text.length;
		for (var i = 0; i < arrayLength; i++) 
		{
			var theText = document.createElement("li");
			theText.innerHTML = text[i];
			eventText.appendChild(theText);
		}
	} 
	else
	{
		var theText = document.createElement("li");
		theText.innerHTML = text;
		eventText.appendChild(theText);
	}
}





/* - - - - - - - - - - Getting data from google calendar - - - - - - - - - - */  //Don't touch this unless you know what you are doing

//The ID of the calendar that data is being pulled from
var calendarID = "c_dm6lpuc64iprt32bcieifntl08@group.calendar.google.com";
//An API key from the same google account (Must be from a project with the google calendar api enabled)
var APIKey = "AIzaSyChcDcFx0d-ejgyhHSvoKIbRaIBk79dQwY";

//Starts the process of getting calendar data from google calendar
function LoadCalendarArray() 
{
	//Sets key and asks for data
	gapi.client.setApiKey(APIKey);
	return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
    .then(function() 
	{ 
		//If data is given then it runs the get calendar events function
		console.log("GAPI client loaded for Google Calendars API");
		GetCalendarEvents();
	},
	function(err) 
	{ 
		console.error("Error loading GAPI client for Google Calendars API", err); 
	});
}

//Returns calendar events in an object and then runs the PopulateCalendarData function
function GetCalendarEvents() 
{
	if (month == 12)
	{
		maxTime = (year + 1) + "-" + "01" + "-" + "01T06:00:00.000Z";
	}
	else
	{
		maxTime = year + "-" + (month + 1) + "-" + "01T06:00:00.000Z";
	}
	minTime = year + "-" + month + "-" + "01T06:00:00.000Z";
	return gapi.client.calendar.events.list(
	{
	  "calendarId": calendarID,
	  "showDeleted": false,
	  "singleEvents": true,
	  "timeMax": maxTime,
	  "timeMin": minTime,
	  "timeZone": "America/Denver",
	  "fields": "items",
	  "orderBy": "startTime",
	  "prettyPrint": true
	})
    .then(function(response) 
    {
		calendarData = response.result;
		PopulateCalendarData();

	},
	function(err) 
	{ 
		console.error("Execute error", err); 
	});
}

//I'm gonna be honest with you I have no idea what this does
//But I've spent hours getting this api working and am not willing to figure it out
gapi.load("client");
