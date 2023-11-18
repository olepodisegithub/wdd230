
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
if (jloadtime  !== null)
{
    jloadtime.value = new Date();
}

/* directory form scripts */

const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData(url) 
{
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members); 
}

getMemberData(url);

const displayMembers = (members) => 
{
    members.forEach((member) => 
    {
        let card = document.createElement('section');
        card.id = "directorysection"
        let portrait = document.createElement('img');
        portrait.setAttribute('src', "images/" + member.image);
        portrait.setAttribute('alt', `Picture of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        portrait.id = "directoryimg"

        let name = document.createElement('h3');
        name.textContent = `${member.name}`;

        let address = document.createElement('h3');
        address.textContent = `${member.address}`;

        let contact = document.createElement('h3');
        contact.textContent = `${member.phoneNumber}`;
        
        let aElement = document.createElement('a');
        aElement.href = member.websiteURL;
        aElement.target = "_blank";
        aElement.innerText = member.name;
        let astring = `<a href="${member.websiteURL}" target="_blank">${member.websiteURL}</a>`;

        let membership = document.createElement('h3');
        membership.textContent = `${member.membershipLevel}`;
    
        card.appendChild(name);
        card.appendChild(portrait);
        card.appendChild(address);
        card.appendChild(contact);
        card.appendChild(aElement);
        card.appendChild(membership);
    
        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => 
{
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList)

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
