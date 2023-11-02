const webvisits = document.getElementById("visits");

let latestDateVisit = Number(window.localStorage.getItem("visit-date")) || Date.now();
let visitsCount = Number(window.localStorage.getItem("visits-count")) || 0;

if (visitsCount !== 0) 
{
	if (latestDateVisit.Date === Date.now().Date)
	{
		webvisits.textContent = `${visitsCount} visits. Back so soon! Awesome!`;
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

localStorage.setItem("visits-count", visitsCount);
if (visitsCount === 1)
{
	localStorage.setItem("visit-date", visitsCount);
}



