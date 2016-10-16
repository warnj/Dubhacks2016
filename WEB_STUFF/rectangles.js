// CSE 154
// Creates and manipulates rectangles. 

// Today's version adds:
//   - rectangles randomly move when the "move" button is clicked
//   - drag-n-drop

(function() {
	"use strict";

	window.onload = function() {
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() { 
		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;
		for(var i = 0; i < count; i++) {
			var rect = document.createElement("div");
			rect.className = "rectangle";
			//rect.onclick = remove;
			rect.onmousedown = mouseDown;
			rect.onmouseup = mouseUp;
			rect.onmousemove = mouseMove;
			document.getElementById("rectanglearea").appendChild(rect);
		}
	}

	// Called when the mouse button is pressed down on a rectangle.
	// Begins dragging of that rectangle
	function mouseDown(event) {
		this.style.zIndex = 10;
		this.dragging = true;
		this.prevX = event.clientX;
		this.prevY = event.clientY;
	}

	// Called when the mouse cursor moves around on a rectangle.
	// If this is done while the mouse button is held down, drags a rectangle.
	function mouseMove(event) {
		if(this.dragging) {
			var dy = event.clientY - this.prevY;
			var dx = event.clientX - this.prevX;

			var oldX = parseInt(window.getComputedStyle(this).left);
			var oldY = parseInt(window.getComputedStyle(this).top);

			this.style.top = oldY + dy + "px";
			this.style.left = oldX + dx + "px";

			this.prevX = event.clientX;
			this.prevY = event.clientY;
		}
	}

	// Called when the mouse button is released on a rectangle.
	// Stops any rectangle-dragging action that is in progress.
	function mouseUp() {
		this.dragging = false;
	}


	// Randomly color all of the rectangles
	function colorIt() {
		var rects = document.querySelectorAll(".rectangle");
		for(var i = 0; i < rects.length; i++) {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			var opacity = Math.random();
			rects[i].style.backgroundColor = "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
		}
	}

	// WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {
		emailjs.send("outlook","dubhacks16",{from_name: "James", notes: "Check this out!"})
		.then(function(response) {
		   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
		}, function(err) {
		   console.log("FAILED. error=", err);
		});
		alert("hi");
	}

	function sendMail() {
	    var link = "mailto:warnj@outlook.com"
	             + "&subject=" + escape("This is my subject")
	             + "&body=" + escape(document.getElementById('myText').value)
	    ;

	    window.location.href = link;
	}

	// Removes clicked rectangle
	function remove() {
		this.parentNode.removeChild(this);
	}

	

})();
