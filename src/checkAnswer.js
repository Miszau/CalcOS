function check(a){
	var suma = window.value;
	var score = parseInt(document.getElementById('varScore').innerHTML);
//sprawdzanie odpowiedzi i dawanie punktów
		if (a == 1){
		if ( document.getElementById('answer_1').innerHTML == suma){
			score = score + 1;
		}
		else{
			score = score - 1;
		}
	}
	
	else if (a == 2){
		if ( document.getElementById('answer_2').innerHTML == suma){
			score = score + 1;
		}
		else{
			score = score - 1;
		}
	}
	
	else if (a == 3){
		if ( document.getElementById('answer_3').innerHTML == suma){
			score = score + 1;
		}
		else{
			score = score - 1;
		}
	}
	
	else if (a == 4){
		if ( document.getElementById('answer_4').innerHTML == suma){
			score = score + 1;
		}
		else{
			score = score - 1;
		}
	}
	document.getElementById('varScore').innerHTML = score;
	
	FastCalc();
}
