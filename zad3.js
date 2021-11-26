function tabliczka_mnozenia(a) {

	for (var i=1; i< (a+1); i++){
		for(var y=1; y< (a+1); y++){
			console.log(i*y + " " );
			document.write(i*y + " " );
		}
		console.log("<br/>");
		document.write("<br/>");
	}
}