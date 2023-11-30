const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDexc = document.querySelector('figcaption');

let lat = '-24.630320399959317';
let long = '25.898728490903455';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=7191f9e953ba027452d7d840235d453d`;

async function apiFetch()
{
    try
    {
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

apiFetch();

function displayResults(data)
{
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = capFirstLetter(data.weather[0].description);
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDexc.textContent = `${desc}`;
}

function capFirstLetter(sentence)
{
    const arr = sentence.split(" ");
   
    for (var i = 0; i < arr.length; i++) 
    {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
}