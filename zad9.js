function Pascal(a){
	for (i=0; i<a; i++){
		liniaPascala(i);
		document.write("<br/>");
	}
	
}

function liniaPascala(numer_lini) {

  var wartosci_lini = [1];

  var długosc_lini = numer_lini +1;

  for (let i = 1; i < długosc_lini; i += 1) {
   
    wartosci_lini[i] = (wartosci_lini[i - 1] * (numer_lini - i + 1)) /i;
  }

  document.write(wartosci_lini);
  
}
