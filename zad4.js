function Fibonacci(a) {

	tablica = new Array(a);

		tablica[0]=0; 
		tablica[1]=1;
		for (i=2; i<a; i++){
			tablica[i]=tablica[i-1]+tablica[i-2]
		}

		for(j=0; j<a; j++) {
			console.log(tablica[j]+ ", ");
			document.write(tablica[j]+ ", ");
		}

}