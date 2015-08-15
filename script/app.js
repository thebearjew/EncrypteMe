var enbutn = document.getElementById('encryptButn');
enbutn.onclick = arrangeString;

function arrangeString(){
	var pass = document.getElementById('passInput').value
	var passnumber = 0
	for (var i=0;i<pass.length;i++){
		passnumber += pass.charCodeAt(i)
	}
	var newString = document.getElementById('inputText').value
	document.getElementById('inputText').value = fetchAscii(newString, passnumber)
	document.getElementById('passInput').value = ""
}
function fetchAscii(obj, pass)
{
      var convertedObj = '';
      for(i = 0; i < obj.length; i++)
      { 
            var asciiChar = obj.charCodeAt(i) * pass;
            convertedObj += '&' + asciiChar;
      } 
      return convertedObj;
}
