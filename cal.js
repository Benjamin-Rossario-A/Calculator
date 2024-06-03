let inputBox = document.getElementById("inputBox");
function display(temp)
{
    inputBox.value+= temp
}
function Calculate()
{
    try
    {
        inputBox.value = eval(inputBox.value);
    }
    catch(err)
    {
        alert("invalid");
        inputBox.value='';
    }
}
function ClearDisplay()
{
    inputBox.value='';
}

function deleteOne()
{
    inputBox.value = inputBox.value.slice(0,-1);
}
