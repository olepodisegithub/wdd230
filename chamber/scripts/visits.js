const webvisits = document.getElementById("visits");

let latestDateVisit = Number(window.localStorage.getItem("latest-date-visit")) || Date.now();
let visitsCount = Number(window.localStorage.getItem("visits")) || 0;

if (visitsCount !== 0) 
{
	if (latestDateVisit.Date === Date.now().Date)
	{
		webvisits.textContent = `Back so soon! Awesome!`;
	}
	else
	{
		var timeDifference = Date.now().getTime() - latestDateVisit.getTime(); 
      	var daysDifference = timeDifference / (1000 * 3600 * 24);
		webvisits.textContent = `You last visited ${daysDifference} days ago.`;
	}
} 
else 
{
	webvisits.textContent = `Welcome! Let us know if you have any questions.`;
}

visitsCount++;

localStorage.setItem("visits", visitsCount);


