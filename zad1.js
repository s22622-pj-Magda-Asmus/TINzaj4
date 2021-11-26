function Pitagoras(number1,number2,number3)  {

var max =0;
var kwadrat=0;

if (number1 > max ) {
	max= number1;
	number1=0;
}

if (number2 > max ) {
	number1=max;
	max= number2;
	number2=0;
}

if (number3 > max ) {
	number2=max;
	max= number3;
	number3=0;
}


kwadrat= (number1*number1)+(number2*number2)+(number3*number3);

if(max*max == kwadrat )  {
	console.log("zadane liczby tworza 'trójkę pitagorejską'"  );
	document.write("zadane liczby tworza 'trójkę pitagorejską'" + "<br/>");
 }else {
 	console.log("zadane liczby NIE tworza 'trójki pitagorejskiej' ");
 	document.write("zadane liczby NIE tworza 'trójki pitagorejskiej' " + "<br/>");
 }
}