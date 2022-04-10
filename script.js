let ingredientsNames=["Coffee","Tea","Milk","Water"];
function listNames(){
	document.getElementById("main").innerHTML=ingredientsNames.toString();
}
function addToEnd(){
	ingredientsNames.push(prompt("Enter name"));
	listNames();
}
function removeFromEnd(){
	alert("Removing"+ingredientsNames.pop());
	listNames();
}
function addToStart(){
	ingredientsNames.unshift(prompt("Enter name"));
	listNames();
}


function removeFromStart(){
	alert("Removing"+ingredientsNames.shift());
	listNames();
}
function addToMiddle(){
	ingredientsNames.splice(2,9,prompt("Enter name"));
	listNames();
}