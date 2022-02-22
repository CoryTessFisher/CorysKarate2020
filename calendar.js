//Copyright Cory's Karate LLC 2022, All Rights Reserved

/* - - - - - - - - - - Variables! - - - - - - - - - - */

//Objects taken from the html page
var monthText = document.getElementById("calendarMonthText");
var headerTextBox = document.getElementById("calendarHeaderText");
var calendarDatesBox = document.getElementById("calendarDates");

//Data that will be placed in the html Page
var rows = [];
var calendarData = [];

//Data that is hidden in the dark depths of this script
var month = 0;
var year = 0;

var APILoaded = false;





/* - - - - - - - - - - Stuff that runs when this script loads - - - - - - - - - - */

//Adds listner to know when the page has finished loading
window.addEventListener("load", pageFullyLoaded, false);

//Sets the month and year variables to the current month and year
SetCurrentMonthAndYear();

//Creates a Calendar
CreateCalendar();





/* - - - - - - - - - - High Level Functions - - - - - - - - - - */

//Fills in all the data for a calendar
function CreateCalendar()
{
	calendarDatesBox.innerHTML = "";
	headerTextBox.innerHTML = "";
	SetMonthText(month,year);
	CreateCalendarRows();
	LabelDates();

	//This code block will not run if the google calendar api has not finished loading
	//The api functions will automatically run this code once the api has finished loading to account for this
	if (APILoaded)
	{
		GetCalendarEvents();
	}
}


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

//Conversion from a Google datestamp to Date object
function DateFromDateStamp(dateStamp) 
{
	var outputObject = new Date();
	var dateArray = dateStamp.split("-");
	outputObject.setFullYear(dateArray[0]);
	outputObject.setMonth(dateArray[1]);
	outputObject.setDate(dateArray[2]);
	return (outputObject);
}

//Conversion from RFC3339 timestamp to Date object
function DateFromTimeStamp(timeStamp) 
{
	return (new Date(Date.parse(timeStamp)));
}

function StringFromTimeStamps(startingTimeStamp, endingTimeStamp)
{
	var timeArray = [];
	var timeStringArray = [];
	timeArray.push(DateFromTimeStamp(startingTimeStamp));
	timeArray.push(DateFromTimeStamp(endingTimeStamp));
	for (var i = 0; i <= 1; i++) 
	{
		var emptyString = "";
		timeStringArray.push(emptyString)
		var hours = timeArray[i].getHours();
		if (hours <= 12) 
		{
			timeStringArray[i] += hours
		}
		else
		{
			timeStringArray[i] += (hours - 12)
		}
		timeStringArray[i] += ":"
		var minutes = timeArray[i].getMinutes();
		if (minutes <= 9) 
		{
			timeStringArray[i] += "0"
		}
		timeStringArray[i] += minutes
	}

	if (timeStringArray[0] == timeStringArray[1])
	{
		return (timeStringArray[0]);
	}
	else
	{
		return (timeStringArray[0] + "-" + timeStringArray[1]);
	}
}

function NextMonth() 
{
	if (month == 12)
	{
		month = 1;
		year += 1;
	}
	else
	{
		month += 1;
	}

	CreateCalendar();
}

function LastMonth() 
{ 
	if (month == 1)
	{
		month = 12;
		year -= 1;
	}
	else
	{
		month -= 1;
	}
	CreateCalendar();
}



/* - - - - - - - - - - Functions that indirectly modify the HTML - - - - - - - - - - */

//Creates the correct ammount of calendar rows
function CreateCalendarRows()
{
	rows = [];
	for (var i = NumberOfCalendarRows() - 1; i >= 0; i--) 
	{
		CreateRow();
	}
}

//Places the correct dates on all of the calendar days
function LabelDates()
{
	dateNumber = 1 - NumberOfBlankDays();
	lastDate = NumOfDaysInMonth();
	numOfRows = NumberOfCalendarRows();
	for (var rowNumber = 1; rowNumber <= numOfRows; rowNumber++) 
	{
		for (var columnNumber = 1; columnNumber <= 7; columnNumber++) 
		{
			if ((dateNumber >= 1) && (dateNumber <= lastDate)) 
			{
				SetDateText(dateNumber, rowNumber, columnNumber);
			}
			dateNumber++;
		}
	}
}

//Populates the calendar with the data from google calendars
function PopulateCalendarData()
{
	for (var i = 0; i < calendarData.items.length; i++) 
	{
		if (calendarData.items[i].summary !== undefined) 
		{
			if (calendarData.items[i].description !== undefined) 
			{
				CreateHeaderText(calendarData.items[i].description.split("<br>"));
			}
			if (calendarData.items[i].start.date !== undefined)
			{
				CreateBasicEvent(calendarData.items[i]);
			}
			else
			{
				CreateEventWithTime(calendarData.items[i]);
			}
		}
	}
}

function CreateBasicEvent(eventData)
{
	var position = DateToRowAndColumn(DateFromDateStamp(eventData.start.date));
	var eventText = [];
	var summaryText = eventData.summary.split("(");
	if (Array.isArray(summaryText)) 
	{
		arrayLength = summaryText.length;
		for (var j = 0; j < arrayLength; j++) 
		{
			if (j > 0) 
			{
				eventText.push("(" + summaryText[j]);
			}
			else
			{
				eventText.push(summaryText[j]);
			}
		}
	}
	else
	{
		eventText.push(summaryText);
	}
	AddEvent(eventText, position[1], position[0])
}

function CreateEventWithTime(eventData)
{
	var position = DateToRowAndColumn(DateFromTimeStamp(eventData.start.dateTime));
	var eventText = [];
	var summaryText = eventData.summary.split("(");
	if (Array.isArray(summaryText)) 
	{
		arrayLength = summaryText.length;
		for (var j = 0; j < arrayLength; j++) 
		{
			if (j > 0) 
			{
				eventText.push("(" + summaryText[j]);
			}
			else
			{
				eventText.push(summaryText[j]);
			}
		}
	}
	else
	{
		eventText.push(summaryText);
	}
	eventText.push(StringFromTimeStamps(eventData.start.dateTime, eventData.end.dateTime));
	AddEvent(eventText, position[1], position[0])
}




/* - - - - - - - - - - Functions that directly modify the HTML - - - - - - - - - - */

//Sets the text for the month and year
function SetMonthText(monthInt, yearInt)
{
	var textString = "";

	switch(monthInt)
	{
		case 1: textString += "January"; break;
		case 2: textString += "February"; break;
		case 3: textString += "March"; break;
		case 4: textString += "April"; break;
		case 5: textString += "May"; break;
		case 6: textString += "June"; break;
		case 7: textString += "July"; break;
		case 8: textString += "August"; break;
		case 9: textString += "September"; break;
		case 10: textString += "October"; break;
		case 11: textString += "Novemeber"; break;
		case 12: textString += "December"; break;
		default: textString += "Jaiden messed up the code for this.";  //This would show up if I ever made mistakes.
	}

	textString += " "
	textString += yearInt;
	monthText.innerHTML = textString;
}

//Makes a line of text in the header of the calendar
function CreateHeaderText(text)
{
	if (Array.isArray(text))
	{
		arrayLength = text.length;
		for (var i = 0; i < arrayLength; i++) 
		{
			var theText = document.createElement("li");
			theText.innerHTML = text[i];
			headerTextBox.appendChild(theText);
		}
	} 
	else
	{
		var theText = document.createElement("li");
		theText.innerHTML = text;
		headerTextBox.appendChild(theText);
	}
}

//Places date text on a calendar day
function SetDateText(text, row, column)
{
	//Changing 1 based coordinates to zero based coordinates
	row -= 1;
	column -= 1;
	var theText = document.createElement("h1");
	theText.innerHTML = text;
	rows[row][column].appendChild(theText);
}

//Places date text on a calendar day
function AddEvent(text, row, column)
{
	//Changing 1 based coordinates to zero based coordinates
	row -= 1;
	column -= 1;

	var theDiv = document.createElement("div");
	theDiv.className = "eventText";
	rows[row][column].appendChild(theDiv);

	if (Array.isArray(text))
	{
		arrayLength = text.length;
		for (var i = 0; i < arrayLength; i++) 
		{
			var theText = document.createElement("h2");
			theText.innerHTML = text[i];
			theDiv.appendChild(theText);
		}
	}
	else
	{
		var theText = document.createElement("h2");
		theText.innerHTML = text;
		theDiv.appendChild(theText);	
	}
}

//Creates a row of calendar days
function CreateRow()
{
	rowArray = [];
	row = document.createElement("ul");
	row.className = "calendarRow";
	for (var i = 0; i < 7; i++) 
	{
		var day = document.createElement("li");
		row.appendChild(day);
		rowArray.push(day);
	}
	calendarDates.appendChild(row);
	rows.push(rowArray);
}





/* - - - - - - - - - - Functions that return a value - - - - - - - - - - */

//The number of days at the beginning of the current months calendar that should be blank
function NumberOfBlankDays() { return (new Date(year + "-" + month + "-01").getDay()); }

//The number of days in the current month
function NumOfDaysInMonth() { return new Date(year, month, 0).getDate(); }

//Then number of rows that the current months calendar should have
function NumberOfCalendarRows() { return Math.ceil((NumOfDaysInMonth() + NumberOfBlankDays()) / 7); }

//Mathces a date with its appropriate row and column
function DateToRowAndColumn(dateObject)
{
	var positionArray = [];
	var day = dateObject.getDate();
	var blanks = NumberOfBlankDays();
	positionArray[0] = ((day + blanks) % 7);
	if (positionArray[0] == 0)
	{
		positionArray[0] = 7
	}
	positionArray[1] = (Math.ceil((day + blanks) / 7));
	return (positionArray);
}





/* - - - - - - - - - - Misc Functions - - - - - - - - - - */

//Runs when the page has finished loading
function pageFullyLoaded(e) 
{
    LoadCalendarArray();
    
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
		APILoaded = true;
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
