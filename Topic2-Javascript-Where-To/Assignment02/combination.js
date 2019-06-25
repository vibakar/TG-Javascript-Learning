var text = "dog";
var splitText = text.split('');
var temp = "";
var arr = [];
for(var i = 0; i < splitText.length; i++) {
		arr.push(splitText[i]);
		temp = splitText[i];
	for(var j = i+1; j < splitText.length; j++) {
		temp = temp + splitText[j];
		arr.push(temp);
	}
}
document.write(arr);