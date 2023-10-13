const inputControl = document.querySelector('#favchap');
const addButton = document.querySelector('button');
const chapterList = document.querySelector('#list');

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