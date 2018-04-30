var numsquares=6;
var colors=generateRandomColor(numsquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var button=document.querySelector("#reset");
var stripe=document.querySelector("#stripe");
var easy=document.querySelector("#easyBtn");
var hard=document.querySelector("#hardBtn");
var messageDisplay=document.querySelector("#messageDisplay");

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	//Add initial Colors to squares
	squares[i].style.backgroundColor=colors[i];
	//Add listener to squares
	squares[i].addEventListener("click",function(){
		//Grab Color of Clicked square
		var clickedColor=this.style.backgroundColor;
		//Compare color to picked color
		if(pickedColor===clickedColor){
			messageDisplay.textContent="Correct";
			h1.style.backgroundColor=clickedColor;
			button.textContent="Play Again?";

			for(var i=0;i<colors.length;i++){
			squares[i].style.backgroundColor=pickedColor;
			}
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Invalid Choice";
		}

	});
}
button.addEventListener("click",function(){
	colors=generateRandomColor(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	this.textContent="New Colors";


})
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsquares=3;
	colors=generateRandomColor(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else
			{
				squares[i].style.display="none";
			}
	}
})
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numsquares=6;
	colors=generateRandomColor(numsquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{       squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
})

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	//for red
	var r=Math.floor(Math.random() * 256);
	//for green
	var g=Math.floor(Math.random() * 256);
	//for blue
	var b=Math.floor(Math.random() * 256); 
	return "rgb("+ r +", "+ g +", "+ b +")";
}
