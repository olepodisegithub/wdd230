const webvisits = document.getElementById("visits");

let visitsCount = Number(window.localStorage.getItem("wdd-visits")) || 0;

if (visitsCount !== 0) 
{
	webvisits.textContent = 'Visits : ' + visitsCount;
} 
else 
{
	webvisits.textContent = `Visits : You are first visitor`;
}

visitsCount++;

localStorage.setItem("wdd-visits", visitsCount);

