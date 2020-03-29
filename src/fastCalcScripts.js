function FastCalc(){

//Generowanie się działań	
//
	var znak = Math.floor(Math.random() * 4);
	document.getElementById('first_number').innerHTML = Math.floor(Math.random() * 100) + 1;
	document.getElementById('second_number').innerHTML = Math.floor(Math.random() * 100) + 1;
	var a = parseInt(document.getElementById('first_number').innerHTML);
	var b = parseInt(document.getElementById('second_number').innerHTML);
	
	if( znak == 0) {
		document.getElementById('operation').innerHTML = '+';
		suma = a + b;
	}
	if( znak == 1) {
		document.getElementById('operation').innerHTML = '-';
		suma = a - b;
	}
	if( znak == 2) {
		document.getElementById('operation').innerHTML = '&#215';
		suma = a * b;
	}
	if( znak == 3) {
		document.getElementById('operation').innerHTML = '/';
		suma = a / b;
	}
	document.getElementById('invisibleAnswer').innerHTML = suma;
	
//Tutaj generują się odpowiedzi
//
	var x = Math.floor(Math.random() * 4); //generowanie miejsca poprawnej odpowiedzi	
	//ustawianie minimalnej i maksymalnej wartości, które potem są potrzebne
	//niepoprawnych odpowiedzi
	if (score > 5){
		var max = suma + score;
		var min = suma - score;
	}
	else{
		var max = suma + 4;
		var min = suma - 4;
	}
		
	if ( x == 0){
		document.getElementById('answer_1').innerHTML = suma;
		document.getElementById('answer_2').innerHTML = suma - Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_3').innerHTML = suma + Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_4').innerHTML = suma + Math.floor(Math.random() * (max - min) + min);
	}
	if ( x == 1){
		document.getElementById('answer_1').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_2').innerHTML = suma;
		document.getElementById('answer_3').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_4').innerHTML = Math.floor(Math.random() * (max - min) + min);
	}
	if ( x == 2){
		document.getElementById('answer_1').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_2').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_3').innerHTML = suma;
		document.getElementById('answer_4').innerHTML = Math.floor(Math.random() * (max - min) + min);
	}
	if ( x == 3){
		document.getElementById('answer_1').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_2').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_3').innerHTML = Math.floor(Math.random() * (max - min) + min);
		document.getElementById('answer_4').innerHTML = suma;
	}
}