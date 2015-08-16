$('#encryptButn').click(arrangeString)
$('#dencryptButn').click(reverseString)
function arrangeString(){
	var pass = document.getElementById('passInput').value
	var passnumber = 0
	for (var i=0;i<pass.length;i++){
		passnumber += pass.charCodeAt(i)
	}
	var newString = document.getElementById('inputText').value
	document.getElementById('inputText').value = fetchAscii(newString, passnumber)
	$('#passInput').value = ""
}

function reverseString(){
	var pass = document.getElementById('passInput').value
	var passnumber = 0
	for (var i=0;i<pass.length;i++){
		passnumber += pass.charCodeAt(i)
	}
	var oldString = document.getElementById('inputText').value
	var newString = oldString.split("&")
	document.getElementById('inputText').value = fetchAscii2(newString, passnumber)
	$('#passInput').value = ""
}

function fetchAscii(obj, pass)
{
      var convertedObj = '';
      for(i = 0; i < obj.length; i++)
      { 
            var asciiChar = obj.charCodeAt(i) +35+ pass;
            convertedObj += '&' + asciiChar;
      } 
      return convertedObj;
}

function fetchAscii2(obj, pass)
{
      var convertedObj = '';
      for(i = 0; i < obj.length; i++)
      { 
            var Char = String.fromCharCode(obj[i]-35-pass);
            convertedObj += Char;
      } 
      return convertedObj;
}