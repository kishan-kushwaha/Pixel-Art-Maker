//take input
let Color = document.getElementById('colorPicker');
let Submit = document.getElementById("myBtn");
let grid = document.getElementById('pixelCanvas');


//click on sumbit succesfully,now make grid with the help of makeGrid function
Submit.addEventListener('click', function(event) {
	grid.innerHTML = " ";
	//event.preventDefault() prevent the page from reloading on submitting the form
	event.preventDefault();
	//call the function to makeGrid
	makeGrid();
});



grid.addEventListener('click', function(event) {
	if (event.target.nodeName === 'TD') {
		event.target.style.backgroundColor = Color.value;
	}
});



function makeGrid() {
	//take input of height and width
	let Height = document.getElementById('inputHeight');
	let Width = document.getElementById('inputWidth');

	for (let i = 0; i < Height.value; i++) {
		let ans = grid.insertRow(0);
		for (let j = 0; j < Width.value; j++) {
			ans.insertCell(0);
		}
	}
}