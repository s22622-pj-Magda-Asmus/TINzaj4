function pol_choinka(a) {

		for (i=0; i<a ; i++){

		var str = "";
			for (j=a+1; j>a-i ; j--){
				document.write("*");
				str=str+"*";
			}
		document.write("<br/>");
		console.log(str);

	    }
}