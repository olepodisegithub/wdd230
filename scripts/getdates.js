
const d = new Date();
let year = d.getFullYear();

document.getElementById('copyright').innerHTML = `©${year}
<br>
Oaitse Lepodise
<br>
Botswana`;

document.getElementById('lastModified').innerHTML = `Last Modification: ${document.lastModified}`