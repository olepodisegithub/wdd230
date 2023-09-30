
const d = new Date();
let year = d.getFullYear();

document.getElementById('copyright').innerHTML = `©${year}  Oaitse Lepodise,   Botswana  `;

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
                tab.classList.remove('active');
            }
        });
        
        const tabName = tab.textContent;
        tabContent.textContent = tabName;
		tab.classList.toggle('active');
    });
});

