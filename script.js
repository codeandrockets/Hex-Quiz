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

		document.getElementById('div1').style.background = "#" + hex1;
		document.getElementById('div2').style.background = "#" + hex2;
		document.getElementById('div3').style.background = "#" + hex3;
		document.getElementById('div4').style.background = "#" + hex4;

		var array = [hex1, hex2, hex3, hex4];
		console.log(array);
		var rightHex = array[Math.floor(Math.random() * array.length)];
		console.log(rightHex);
		document.getElementById('rightHex').innerHTML = "#" + rightHex;

	}


	