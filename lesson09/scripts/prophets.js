const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) 
{
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); 
}

getProphetData(url);

const displayProphets = (prophets) => 
{
    prophets.forEach((prophet) => 
    {
        let card = document.createElement('section');
        let fullName = document.createElement('h3');
        let dateOfBirth = document.createElement('h6');
        let placeOfBirth = document.createElement('h6');
        let portrait = document.createElement('img');
  
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date Of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place Of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
    
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);
    
        cards.appendChild(card);
    });
}