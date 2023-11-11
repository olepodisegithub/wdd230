
const d = new Date();
let year = d.getFullYear();

document.getElementById('copyright').innerHTML = `©${year} Gaborone, Botswana Chamber of Commerce  `;

document.getElementById('myname').innerHTML = `WDD 230 Project by: Oaitse Lepodise`;

document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => 
{
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const tabs = document.querySelectorAll('nav a');
const tabContent = document.querySelector('h2');

tabs.forEach(tab => 
{
    tab.addEventListener('click', () => 
    {	
        tabs.forEach(tab => 
        {
            if (tab.textContent === tabContent.textContent)
            {
                if (tab.textContent.includes("🕶️") || tab.textContent.includes("🔆"))
                {

                }
                else
                {
                    tab.classList.remove('active');
                }
            }
        });
        
        if (tab.textContent.includes("🕶️") || tab.textContent.includes("🔆"))
        {

        }
        else
        {
            const tabName = tab.textContent;
            tabContent.textContent = tabName;
            tab.classList.toggle('active');
        }
    });
});

const switchLink = document.querySelector("#switch");
const body = document.querySelector("body");

switchLink.addEventListener("click", () => 
{
	if (switchLink.textContent.includes("🕶️")) 
    {
		body.style.background = "#000";
		body.style.color = "#fff";
		switchLink.textContent = "🔆";
	} 
    else 
    {
		body.style.background = "#eee";
		body.style.color = "#000";
		switchLink.textContent = "🕶️";
	}
});

/* join form scripts */

const jloadtime = document.getElementById("loadtime");
jloadtime.value = new Date();
