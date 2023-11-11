const baseURL = "https://olepodisegithub.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

const unorderedList = document.getElementById("lessons");

async function getLinks() 
{
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}
  
getLinks();

const displayLinks = (lessons) => 
{
    lessons.forEach((lesson) => 
    {
        let astring = "";
        let liElement = document.createElement('li');
        liElement.textContent = `${lesson.lesson}: `;
        let aElement = document.createElement('a');
        lesson.links.forEach((link) => 
        {
            if (astring === "") 
            {
                astring = `<a href="${link.url}" target="_blank">${link.title}</a>`
            }
            else
            {
                astring = astring + ` | <a href="${link.url}" target="_blank">${link.title}</a>`
            }
        });
        liElement.innerHTML = `${lesson.lesson}: ` + astring
        unorderedList.appendChild(liElement)
    });
}