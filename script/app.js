$('.encryptButn').click({param1: "enc"}, arrangeString);
$('.dencryptButn').click({param2: "dec"}, arrangeString);

function arrangeString(funct){
	var pass = document.getElementById('passInput').value
	var passlist = [] 
	for (var i=0;i<pass.length;i++){
		if (typeof pass[i] == "string"){
			passlist.push(pass.charCodeAt(i))
		}
		else{
			passlist.push(pass[i])
		}
	}
	var text = document.getElementById('inputText').value
	if (funct.data.param1 == "enc"){
		$('#inputText').val(fetchAscii(text, passlist))
		$('#passInput').val("")
	}
	else if(funct.data.param2 == "dec"){
		var newText = text.split("&")	
		$('#inputText').val(fetchAscii2(newText, passlist))
		$('#passInput').val("")
	}
}

function* infiniteGen(listt){
	var i = 0
	length = listt.length
	while (listt.length > 0){
		if (i == (length-1)){
			yield (listt[i])
			i = 0
		}
		else{
			yield (listt[i])
			i += 1
		}
	}
}
function fetchAscii(obj, pass)
{
      var convertedObj = '';
      b = infiniteGen(pass)
      for(i = 0; i < obj.length; i++)
      { 
            var asciiChar = obj.charCodeAt(i) + 10 + b.next().value;
            convertedObj += '&' + asciiChar;
      } 
      return convertedObj;
}
function fetchAscii2(obj, pass)
{
      var convertedObj = '';
      c = infiniteGen(pass)
      console.log(typeof obj)
      obj.shift()
      for(i = 0; i < obj.length; i++)
      { 
            var letter = String.fromCharCode((obj[i]) - 10 - c.next().value);    
            convertedObj += letter;
      } 
      return convertedObj;
}
