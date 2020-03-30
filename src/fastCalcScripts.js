function FastCalc(){

//Generowanie się działań	
//
	
	//generowanie się liczby i znaku problemu matematycznego
	document.getElementById('first_number').innerHTML = Math.floor(Math.random() * 100) + 1;
	document.getElementById('second_number').innerHTML = Math.floor(Math.random() * 100) + 1;
	var znak = Math.floor(Math.random() * 4);
	//pobranie wartości wygenerowanych znaków
	var a = parseInt(document.getElementById('first_number').innerHTML);
	var b = parseInt(document.getElementById('second_number').innerHTML);
	
	//problem matematyczny
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
		var odp = suma.toFixed(2);
		suma = odp;
	}
	window.value = suma; //poprawna odpowiedź
	
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
	
	//incjowanie błędnych odpowiedzi
	var odp1 = Math.floor(Math.random() * (max - min) + min);
	var odp2 = Math.floor(Math.random() * (max - min) + min);
	var odp3 = Math.floor(Math.random() * (max - min) + min);
	
	if ( znak == 3 ){ // dwa miejsca po przecinku dla dzielenia i jeszcze raz losowanie odpowiedzi
		var odp1 = Math.random() * (max - min) + min;
		var odp2 = Math.random() * (max - min) + min;
		var odp3 = Math.random() * (max - min) + min;
			var o1 = odp1.toFixed(2);
			odp1 = o1;
			var o2 = odp2.toFixed(2);
			odp2 = o2;
			var o3 = odp3.toFixed(2);
			odp3 = o3;
	}
	
	//przypisanie odpowiedzi do miejsc	
	if ( x == 0){
		document.getElementById('answer_1').innerHTML = suma;
		document.getElementById('answer_2').innerHTML = odp1;
		document.getElementById('answer_3').innerHTML = odp2;
		document.getElementById('answer_4').innerHTML = odp3;
	}
	if ( x == 1){
		document.getElementById('answer_1').innerHTML = odp1;
		document.getElementById('answer_2').innerHTML = suma;
		document.getElementById('answer_3').innerHTML = odp2;
		document.getElementById('answer_4').innerHTML = odp3;
	}
	if ( x == 2){
		document.getElementById('answer_1').innerHTML = odp1;
		document.getElementById('answer_2').innerHTML = odp2;
		document.getElementById('answer_3').innerHTML = suma;
		document.getElementById('answer_4').innerHTML = odp3;
	}
	if ( x == 3){
		document.getElementById('answer_1').innerHTML = odp1;
		document.getElementById('answer_2').innerHTML = odp2;
		document.getElementById('answer_3').innerHTML = odp3;
		document.getElementById('answer_4').innerHTML = suma;
	}
}
