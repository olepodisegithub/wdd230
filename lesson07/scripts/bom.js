const inputControl = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const chapterList = document.querySelector('#list');

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => 
{
    displayList(chapter);
});

addButton.addEventListener('click', () => 
{
    if (inputControl.value != '') 
    {  
        displayList(inputControl.value); 
        chaptersArray.push(inputControl.value);  
        setChapterList(); 
        inputControl.value = '';
        inputControl.focus();
    }
});

function displayList(item) 
{
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);

    deletebutton.addEventListener('click', function () 
    {
      list.removeChild(li);
      deleteChapter(li.textContent); 
      input.focus();
    });
}

function setChapterList() 
{
    localStorage.setItem('BOMList', JSON.stringify(chaptersArray));
}

function getChapterList() 
{
    return JSON.parse(localStorage.getItem('BOMList'));
}

function deleteChapter(chapter) 
{
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

/*
addButton.addEventListener('click', () => 
{
	if (inputControl.value != '')
    {
        const li = document.createElement('li');
        const deleteButton = document.createElement('li');
        li.textContent = inputControl.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        inputControl.focus();
        inputControl.value = '';

        deleteButton.addEventListener('click', () => 
        {
            list.removeChild(li);
            inputControl.focus();
            inputControl.value = '';
        });
    }
    else
    {
        inputControl.focus();
    }
});
*/