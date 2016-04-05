	var hexOptions = [ 0, 1, 2, 3, 4, 5, 6, 7 ,8 , 9, "A", "B", "C", "D", "E", "F" ];	

	function generateHex() {
		
		var hex = "";
		for (i = 0; i < 6; i++) {
			var singleHex = hexOptions[Math.floor(Math.random() * hexOptions.length)];
			singleHex = singleHex.toString(); 
			hex = hex + singleHex; 
		}
		
		return hex;
		
	} 

	function fillBoxes() {

		var hex1 = generateHex();
		var hex2 = generateHex();
		var hex3 = generateHex();
		var hex4 = generateHex();

		var array = [hex1, hex2, hex3, hex4];

		return array;

	}


	function populate() {

		document.getElementById("answer").innerHTML = "";
		document.getElementById('checkColor').style.background = "#ffffff";

		var array = fillBoxes();
		
		document.getElementById('div1').style.background = "#" + array[0];
		document.getElementById('div2').style.background = "#" + array[1];
		document.getElementById('div3').style.background = "#" + array[2];
		document.getElementById('div4').style.background = "#" + array[3];
		
		var rightHex = array[Math.floor(Math.random() * array.length)];
		document.getElementById('rightHex').innerHTML = "#" + rightHex;
	}

	function check1() {

		var element = document.getElementById('div1');
		var style = window.getComputedStyle(element);
		var hex = style.getPropertyValue('background-color');
		console.log(hex);

		var correctHex = document.getElementById("rightHex").innerHTML;
		document.getElementById('checkColor').style.background = correctHex;

		if ( document.getElementById('checkColor').style.background === document.getElementById('div1').style.background ) {
			document.getElementById("answer").innerHTML = "Correct";
			} else {
				document.getElementById("answer").innerHTML = "Wrong";
			}
	}

	function check2() {

		var element = document.getElementById('div2');
		var style = window.getComputedStyle(element);
		var hex = style.getPropertyValue('background-color');
		console.log(hex);

		var correctHex = document.getElementById("rightHex").innerHTML;
		document.getElementById('checkColor').style.background = correctHex;

		if ( document.getElementById('checkColor').style.background === document.getElementById('div2').style.background ) {
			document.getElementById("answer").innerHTML = "Correct";
			} else {
				document.getElementById("answer").innerHTML = "Wrong";
			}		
		
	}

	function check3() {
	
		var element = document.getElementById('div3');
		var style = window.getComputedStyle(element);
		var hex = style.getPropertyValue('background-color');
		console.log(hex);

		var correctHex = document.getElementById("rightHex").innerHTML;
		document.getElementById('checkColor').style.background = correctHex;

		if ( document.getElementById('checkColor').style.background === document.getElementById('div3').style.background ) {
				document.getElementById("answer").innerHTML = "Correct";
			} else {
				document.getElementById("answer").innerHTML = "Wrong";
			}		


	}

	function check4() {
	
		var element = document.getElementById('div4');
		var style = window.getComputedStyle(element);
		var hex = style.getPropertyValue('background-color');
		console.log(hex);

		var correctHex = document.getElementById("rightHex").innerHTML;
		document.getElementById('checkColor').style.background = correctHex;

		if ( document.getElementById('checkColor').style.background === document.getElementById('div4').style.background ) {
				document.getElementById("answer").innerHTML = "Correct";
			} else {
				document.getElementById("answer").innerHTML = "Wrong";
			}	

	}