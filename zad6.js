function choinka(a) {

	for(x=0; x<2*a+1; x++){
		document.write("*");
		var str = "";
		str=str+"*";
		console.log("str");
	}
	document.write("<br/>")


	for (i=1; i<a+1 ; i++){

	

			for (j=0; j<a-i+1 ; j++){
				document.write("*");
				var str = "";
				str=str+"*";
				console.log(str);
			}
			for (j=a+1; j>a-i+1 ; j--){
				document.write("&nbsp ");
				var str = "";
				str=str+"*";
				console.log("");
			}
			for (j=a+1; j>a-i+2 ; j--){
				document.write("&nbsp ");
				var str = "";
				str=str+"*";
				console.log(" ");
			}
			for (j=0; j<a-i+1 ; j++){
				document.write("*");
				var str = "";
				str=str+"*";
				console.log(str);
			}
			
		document.write("<br/>");
	}
}

