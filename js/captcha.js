const submitButton = document.getElementById("contact-submit");

var dataCallback = function()
{
   submitButton.disabled = false;
}

var dataExpiredCallback = function()
{
   submitButton.disabled = true;
}

var dataErrorCallback = function()
{
   submitButton.disabled = true;
}
