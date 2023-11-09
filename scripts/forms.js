const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("prate");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() 
{
    rangevalue.innerHTML = range.value;
}

/* check if password are the same */

const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password-again");
const message = document.querySelector("#message");

pass2.addEventListener("focusout", checkIfPasswordsSame);
pass1.addEventListener("click", cancelMessage);

function checkIfPasswordsSame() 
{
	if (pass1.value !== pass2.value) 
    {
		message.textContent = "❗ Passwords DO NOT MATCH!. Please re-enter.";
		message.style.visibility = "show";
		pass1.value = "";
        pass2.value = "";
		pass1.focus();
	} 
    else 
    {
		message.style.display = "";
	}
}

function cancelMessage()
{
    message.textContent = "";
}
